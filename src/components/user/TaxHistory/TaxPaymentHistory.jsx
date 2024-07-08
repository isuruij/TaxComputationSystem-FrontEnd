import React, { useState, useEffect } from "react";
import "./TaxHistory.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import { FaTrash } from "react-icons/fa";

function TaxPaymentHistory() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;
  const [taxPayments, setTaxPayments] = useState([]);
  const [selectedValue2, setSelectedValue2] = useState("All Payments");

  useEffect(() => {
    Axios.get(`${base_url}/api/taxpayer/getTaxPayments/${userId}`).then(
      (response) => {
        setTaxPayments(response.data.Data);
        console.log(response.data.Data);
      }
    );
  }, [base_url, userId]);

  // Handler for deleting a record
  const handleDeleteClick = (index) => {
    const record = taxPayments[index];
    Axios.delete(`${base_url}/api/taxpayer/deletePaidTax/${record.paidTaxId}`)
      .then((response) => {
        console.log("Delete successful:", response.data);
        setTaxPayments((prevPayments) =>
          prevPayments.filter((_, i) => i !== index)
        );
        window.location.reload(); // Remove this if you don't want to reload the page
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleDropdownSelect2 = (value) => {
    setSelectedValue2(value);
  };

  const filteredData = React.useMemo(() => {
    let data = taxPayments;
    if (selectedValue2 !== "All Payments") {
      data = taxPayments.filter(
        (payment) => payment.Description === selectedValue2
      );
    }
    return data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }, [taxPayments, selectedValue2]);

  const generatePDF = () => {
    const doc = new jsPDF(); // Create a new PDF document

    // Add a title to the PDF
    doc.setFontSize(18);
    doc.text("Paid Tax Summary Report", 14, 22);

    // Define the table headers
    const headers = [["Date", "Time", "Description", "Amount"]];

    // Prepare the data for the table
    const rows = filteredData.map((d) => [
      new Date(d.updatedAt).toLocaleDateString(),
      new Date(d.updatedAt).toLocaleTimeString(),
      d.Description,
      d.Paid,
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
          <div className="dropdown col-lg-4 col-md-6 col-sm-12 mb-3">
            <button
              className="btn btn-secondary dropdown-toggle w-100"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                padding: "2px",
                fontSize: "18px",
                height: "40px",
                width: "250px",
              }}
            >
              {selectedValue2 || "All Payments"}
            </button>
            <ul className="dropdown-menu">
              {[
                "All Payments",
                "APIT",
                "WHT on Investment Income",
                "WHT on Service Fee Received",
                "Self Assessment Payments",
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
        </div>

        <div className="divtable">
          <table className="table table-responsive text-center table1">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((d, index) => (
                <tr key={d.paidTaxId}>
                  <td>{new Date(d.updatedAt).toLocaleDateString()}</td>
                  <td>{new Date(d.updatedAt).toLocaleTimeString()}</td>
                  <td>{d.Description}</td>
                  <td>{d.Paid}</td>
                  <td>
                    <span>
                      <FaTrash
                        onClick={() => handleDeleteClick(index)}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="taxSummarybutton">
            <button
              type="button"
              className="btn btn-primary"
              style={{ fontSize: "13px" }}
              onClick={generatePDF}
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

// import React, { useState, useEffect } from "react";
// import "./TaxHistory.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
// import Axios from "axios";
// import { FaTrash } from "react-icons/fa";

// function TaxPaymentHistory() {
//   const base_url = import.meta.env.VITE_APP_BACKEND_URL;

//   const cookieValue = Cookies.get("token");
//   const userId = jwtDecode(cookieValue).id;
//   const [taxPayments, setTaxPayments] = useState([]);
//   const [selectedValue2, setSelectedValue2] = useState("All Payments");

//   useEffect(() => {
//     Axios.get(`${base_url}/api/taxpayer/getTaxPayments/${userId}`).then(
//       (response) => {
//         setTaxPayments(response.data.Data);
//         console.log(response.data.Data);
//       }
//     );
//   }, [base_url, userId]);

//   // Handler for deleting a record
//   const handleDeleteClick = (index) => {
//     const record = taxPayments[index];
//     Axios.delete(`${base_url}/api/taxpayer/deletePaidTax/${record.paidTaxId}`)
//       .then((response) => {
//         console.log("Delete successful:", response.data);
//         setTaxPayments((prevPayments) =>
//           prevPayments.filter((_, i) => i !== index)
//         );
//         setMsg("Delete successful");
//         setShow(true);
//         setTimeout(() => {
//           setShow(false);
//           window.location.reload();
//         }, 3000);
//       })
//       .catch((error) => {
//         console.error("Error deleting data:", error);
//       });
//   };

//   const handleDropdownSelect2 = (value) => {
//     setSelectedValue2(value);
//   };

//   const filteredData = React.useMemo(() => {
//     if (selectedValue2 === "All Payments") {
//       return taxPayments;
//     }
//     return taxPayments.filter(
//       (payment) => payment.Description === selectedValue2
//     );
//   }, [taxPayments, selectedValue2]);

//   const generatePDF = () => {
//     const doc = new jsPDF(); // Create a new PDF document

//     // Add a title to the PDF
//     doc.setFontSize(18);
//     doc.text("Paid Tax Summary Report", 14, 22);

//     // Define the table headers
//     const headers = [["Date", "Time", "Description", "Amount"]];

//     // Prepare the data for the table
//     const rows = filteredData.map((d) => [
//       new Date(d.updatedAt).toLocaleDateString(),
//       new Date(d.updatedAt).toLocaleTimeString(),
//       d.Description,
//       d.Paid,
//     ]);

//     // Add the table to the PDF document
//     doc.autoTable({
//       startY: 30, // Starting Y position for the table
//       head: headers,
//       body: rows,
//     });

//     // Save the PDF file
//     doc.save("PaidTaxSummaryReport.pdf");
//   };

//   return (
//     <div>
//       {/* Bootstrap link for styling */}
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//       ></link>

//       <div className="dropdowntable">
//         <div className="dropdownPage d-flex flex-wrap justify-content-between">
//           <div className="dropdown col-lg-4 col-md-6 col-sm-12 mb-3">
//             <button
//               className="btn btn-secondary dropdown-toggle w-100"
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//               style={{
//                 padding: "2px",
//                 fontSize: "18px",
//                 height: "40px",
//                 width: "250px",
//               }}
//             >
//               {selectedValue2 || "All Payments"}
//             </button>
//             <ul className="dropdown-menu">
//               {[
//                 "All Payments",
//                 "APIT",
//                 "WHT on Investment Income",
//                 "WHT on Service Fee Received",
//                 "Self Assessment Payments",
//               ].map((option) => (
//                 <li key={option}>
//                   <a
//                     className="dropdown-item"
//                     href="#"
//                     onClick={() => handleDropdownSelect2(option)}
//                   >
//                     {option}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="divtable">
//           <table className="table table-responsive text-center table1">
//             <thead>
//               <tr>
//                 <th scope="col">Date</th>
//                 <th scope="col">Time</th>
//                 <th scope="col">Description</th>
//                 <th scope="col">Amount</th>
//                 <th scope="col"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((d, index) => (
//                 <tr key={d.paidTaxId}>
//                   <td>{new Date(d.updatedAt).toLocaleDateString()}</td>
//                   <td>{new Date(d.updatedAt).toLocaleTimeString()}</td>
//                   <td>{d.Description}</td>
//                   <td>{d.Paid}</td>
//                   <td>
//                     <span>
//                       <FaTrash
//                         onClick={() => handleDeleteClick(index)}
//                         style={{ cursor: "pointer", color: "red" }}
//                       />
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="taxSummarybutton">
//             <button
//               type="button"
//               className="btn btn-primary"
//               style={{ fontSize: "13px" }}
//               onClick={generatePDF}
//             >
//               <b>
//                 Generate Paid Tax
//                 <br />
//                 Summary Report
//               </b>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaxPaymentHistory;

// import React, { useState, useEffect } from "react";
// import "./TaxHistory.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import Cookies from "js-cookie";
// import Axios from "axios";
// import { jwtDecode } from "jwt-decode";

// function TaxPaymentHistory() {
//   const base_url = import.meta.env.VITE_APP_BACKEND_URL;

//   const cookieValue = Cookies.get("token");
//   const userId = jwtDecode(cookieValue).id;
//   const [data, setData] = useState([]); // State to hold the retrieved data from the API
//   const [date, setDate] = useState(null); // State for the selected date
//   const [selectedValue2, setSelectedValue2] = useState("All transactions"); // State for the selected description value
//   const [taxPayments, setTaxPayments] = useState([]);

//   //Get Paid tax payments
//   useEffect(() => {
//     Axios.get(`${base_url}/api/taxpayer/getTaxPayments/${userId}`).then(
//       (response) => {
//         setTaxPayments(response.data.Data);
//         console.log(response.data.Data);
//       }
//     );
//   }, []);

//   //   // Function to handle date input change
//   //   function handleDateChange(e) {
//   //     const selectedDate = e.target.value ? new Date(e.target.value) : null;
//   //     setDate(selectedDate);
//   //   }

//   // Function to handle dropdown selection change
//   const handleDropdownSelect2 = (value) => {
//     setSelectedValue2(value);
//   };

//   // Memoized filtered data based on date and description
//   const filteredData = React.useMemo(() => {
//     return data.filter((d) => {
//       // Convert selected date to YYYY-MM-DD format
//       const selectedDate = date ? date.toISOString().split("T")[0] : null;

//       // Check if the date matches or if no date is selected
//       const dateMatch = !date || d.date === selectedDate;

//       // Check if the description matches or if 'All transactions' is selected
//       const descriptionMatch =
//         selectedValue2 === "All transactions" ||
//         d.description.includes(selectedValue2);

//       // Return true only if both date and description match
//       return dateMatch && descriptionMatch;
//     });
//   }, [data, date, selectedValue2]);

//   // Function to generate a PDF report
//   const generatePDF = () => {
//     const doc = new jsPDF(); // Create a new PDF document

//     // Add a title to the PDF
//     doc.setFontSize(18);
//     doc.text("Paid Tax Summary Report", 14, 22);

//     // Define the table headers
//     const headers = [["Date", "Time", "Description", "Amount"]];

//     // Prepare the data for the table
//     const rows = filteredData.map((d) => [
//       d.date,
//       d.time,
//       d.description,
//       d.amount,
//     ]);

//     // Add the table to the PDF document
//     doc.autoTable({
//       startY: 30, // Starting Y position for the table
//       head: headers,
//       body: rows,
//     });

//     // Save the PDF file
//     doc.save("PaidTaxSummaryReport.pdf");
//   };

//   return (
//     <div>
//       {/* Bootstrap link for styling */}
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//       ></link>

//       <div className="dropdowntable">
//         <div className="dropdownPage d-flex flex-wrap justify-content-between">
//           {/* Dropdown menu for selecting description */}
//           <div className="dropdown col-lg-4 col-md-6 col-sm-12 mb-3">
//             <button
//               className="btn btn-secondary dropdown-toggle w-100"
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//               style={{
//                 padding: "2px",
//                 fontSize: "18px",
//                 height: "40px",
//                 width: "250px",
//               }}
//             >
//               {selectedValue2 || "All Payments"}
//             </button>
//             <ul className="dropdown-menu">
//               {[
//                 "All Payments",
//                 "APIT",
//                 "WHT on Investment Income",
//                 "WHT on Service Fee Received",
//                 "Self Assessment Payments",
//               ].map((option) => (
//                 <li key={option}>
//                   <a
//                     className="dropdown-item"
//                     href="#"
//                     onClick={() => handleDropdownSelect2(option)}
//                   >
//                     {option}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Date input field */}
//           {/* <div className="date_field col-lg-4 col-md-6 col-sm-12 mb-3">
//                         <div className="date_input">
//                             <input
//                                 className="form-control"
//                                 type="date"
//                                 id="dateInput"
//                                 onChange={handleDateChange}
//                                 style={{ height: "40px", marginLeft: "-100px" }}
//                             />
//                         </div>
//                     </div> */}
//         </div>

//         <div className="divtable">
//           {/* Table for displaying data */}
//           <table className="table table-responsive text-center table1">
//             <thead>
//               <tr>
//                 <th scope="col">Date</th>
//                 <th scope="col">Time</th>
//                 <th scope="col">Description</th>
//                 <th scope="col">Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Iterate over the filtered data and display each row */}
//               {filteredData.map((d) => (
//                 <tr key={d.taxHistoryId}>
//                   <td>{d.date}</td>
//                   <td>{d.time}</td>
//                   <td>{d.description}</td>
//                   <td>{d.reference}</td>
//                   <td>{d.amount}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Button for generating summary report */}
//           <div className="taxSummarybutton">
//             <button
//               type="button"
//               className="btn btn-primary"
//               style={{ fontSize: "13px" }}
//               onClick={generatePDF} // Call the generatePDF function when the button is clicked
//             >
//               <b>
//                 Generate Paid Tax
//                 <br />
//                 Summary Report
//               </b>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaxPaymentHistory;
