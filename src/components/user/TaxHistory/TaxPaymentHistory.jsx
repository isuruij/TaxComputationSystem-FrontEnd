import React, { useState, useEffect } from "react";
import "./TaxHistory.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import jsPDF from "jspdf";
import "jspdf-autotable";

function TaxPaymentHistory() {
    const [data, setData] = useState([]); // State to hold the retrieved data from the API
    const [date, setDate] = useState(null); // State for the selected date
    const [selectedValue2, setSelectedValue2] = useState("All transactions"); // State for the selected description value

    // Fetch data from the API URL when the component mounts
    useEffect(() => {
        fetch("http://localhost:3000/api/taxpayer/taxHistoryType/1")
            .then((response) => {
                // Check if the response is OK (status code in the range 200-299)
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Parse the JSON data
            })
            .then((data) => {
                // Update the data state with the retrieved data
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Function to handle date input change
    function handleDateChange(e) {
        const selectedDate = e.target.value ? new Date(e.target.value) : null;
        setDate(selectedDate);
    }

    // Function to handle dropdown selection change
    const handleDropdownSelect2 = (value) => {
        setSelectedValue2(value);
    };

    // Memoized filtered data based on date and description
    const filteredData = React.useMemo(() => {
        return data.filter((d) => {
            // Convert selected date to YYYY-MM-DD format
            const selectedDate = date ? date.toISOString().split("T")[0] : null;

            // Check if the date matches or if no date is selected
            const dateMatch = !date || d.date === selectedDate;

            // Check if the description matches or if 'All transactions' is selected
            const descriptionMatch =
                selectedValue2 === "All transactions" ||
                d.description.includes(selectedValue2);

            // Return true only if both date and description match
            return dateMatch && descriptionMatch;
        });
    }, [data, date, selectedValue2]);

    // Function to generate a PDF report
    const generatePDF = () => {
        const doc = new jsPDF(); // Create a new PDF document

        // Add a title to the PDF
        doc.setFontSize(18);
        doc.text("Paid Tax Summary Report", 14, 22);

        // Define the table headers
        const headers = [["Date", "Time", "Description", "Reference", "Amount"]];

        // Prepare the data for the table
        const rows = filteredData.map((d) => [
            d.date,
            d.time,
            d.description,
            d.reference,
            d.amount,
        ]);

        // Add the table to the PDF document
        doc.autoTable({
            startY: 30, // Starting Y position for the table
            head: headers,
            body: rows,
        });

        // Save the PDF file
        doc.save("PaidTaxSummaryReport.pdf");
    };

    return (
        <div>
            {/* Bootstrap link for styling */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
            ></link>

            <div className="dropdowntable">
                <div className="dropdownPage d-flex flex-wrap justify-content-between">
                    {/* Dropdown menu for selecting description */}
                    <div className="dropdown col-lg-4 col-md-6 col-sm-12 mb-3">
                        <button
                            className="btn btn-secondary dropdown-toggle w-100"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ padding: "2px", fontSize: "18px", height: "40px", width: "250px" }}
                        >
                            {selectedValue2 || "All transactions"}
                        </button>
                        <ul className="dropdown-menu">
                            {[
                                "All transactions",
                                "Employment income",
                                "Investment income",
                                "Business income",
                                "Other income",
                            ].map((option) => (
                                <li key={option}>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => handleDropdownSelect2(option)}
                                    >
                                        {option}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Date input field */}
                    <div className="date_field col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="date_input">
                            <input
                                className="form-control"
                                type="date"
                                id="dateInput"
                                onChange={handleDateChange}
                                style={{ height: "40px", marginLeft: "-100px" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="divtable">
                    {/* Table for displaying data */}
                    <table className="table table-responsive text-center table1">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Description</th>
                                <th scope="col">Reference</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iterate over the filtered data and display each row */}
                            {filteredData.map((d) => (
                                <tr key={d.taxHistoryId}>
                                    <td>{d.date}</td>
                                    <td>{d.time}</td>
                                    <td>{d.description}</td>
                                    <td>{d.reference}</td>
                                    <td>{d.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Button for generating summary report */}
                    <div className="taxSummarybutton">
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ fontSize: "20px" }}
                            onClick={generatePDF} // Call the generatePDF function when the button is clicked
                        >
                            <b>
                                Generate Paid Tax
                                <br />
                                Summary Report
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaxPaymentHistory;
