import React, { useState, useEffect } from "react";
import "./TaxHistory.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MockData from "./MOCK_DATA.json";

function TaxPaymentHistory() {
  const [date, setDate] = useState(null);
  const [data, setData] = useState(MockData);

  function dateValue(e) {
    if (!e.target.value) {
      setDate(null); // Set date state to null if no value is selected
      return;
    }

    // Parse the selected date into a Date object
    const selectedDate = new Date(e.target.value);

    // Format the date as "MM/DD/YYYY"
    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });

    // Update the date state with the formatted date
    setDate({ ...date, date: formattedDate });
  }

  const [selectedValue1, setSelectedValue1] = useState(null);
  const handleDropdownSelect1 = (value) => {
    setSelectedValue1(value);
  };

  const [selectedValue2, setSelectedValue2] = useState("all transactions");
  const handleDropdownSelect2 = (value) => {
    setSelectedValue2(value);
  };

  //  const filteredData = React.useMemo(() => {
  //    return data.filter((d) => {
  //      const dateMatch = !date || d.Date == date;
  //     console.log(d.Date);
  //     const descriptionMatch =
  //       selectedValue2 === "all transactions" ||
  //        d.Description.includes(selectedValue2);
  //      console.log(selectedValue2);
  //      return dateMatch && descriptionMatch;
  //    });
  // }, [data, date, selectedValue2]);

  const filteredData = React.useMemo(() => {
    return data.filter((d) => {
      const dateMatch = !date || d.Date === date.date;
      console.log(date);
      const descriptionMatch =
        selectedValue2 === "all transactions" ||
        d.Description.includes(selectedValue2);
      console.log(selectedValue2);
      return dateMatch && descriptionMatch;
    });
  }, [data, date, selectedValue2]);

  useEffect(() => {}, [date]);

  //const dropdownOptions1 = ["A", "B", "C"];
  const dropdownOptions2 = [
    "all transactions",
    "employment income",
    "investment income",
    "business income",
    "other income",
  ];

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>

      <div className="dropdowntable">
        <div className="dropdownPage embed-responsive  embed-responsive-16by9">
          <div className="dropdown col-lg-4 col-md-6 ">
            {/* <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "2px", fontSize: "18px", height: "45px" }}
            > 
              {selectedValue1 || "Paid Taxes"}
            </button>
            <ul className="dropdown-menu">
              {dropdownOptions1.map((option) => (
                <li key={option}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleDropdownSelect1(option)}
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
            */}
          </div>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ padding: "2px", fontSize: "18px", height: "45px" }}
            >
              {selectedValue2 || "all transactions"}
            </button>
            <ul className="dropdown-menu">
              {dropdownOptions2.map((option) => (
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

          <div className="date_feild">
            <div className="date_input">
              <input
                className="d form-control"
                type="date"
                id="Ddate"
                onChange={dateValue}
                style={{ height: 45 + "px" }}
              />
            </div>
          </div>

          {/* <div>
          <button class="btn btn-primary d-inline-block" type="button"  aria-expanded="false" style={{padding: 2 + 'px',fontSize:20+'px',width:250+'px'}}>
              Serial Number
            <button class="btn btn-primary d-inline-block" type="button"   aria-expanded="false"style={{fontSize:20+'px'}}>
                11569
            </button>
          </button>
       </div> */}
        </div>

        <div className="divtable">
          <table className="table table-responsive text-center">
            <thead>
              <tr className="">
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Description</th>
                <th scope="col">Reference</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((d) => (
                <tr key={d.Reference}>
                  <td>{d.Date}</td>
                  <td>{d.Time}</td>
                  <td>{d.Description}</td>
                  <td>{d.Reference}</td>
                  <td>{d.Amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="taxSummarybutton">
            <button
              type="button"
              className="btn btn-primary "
              style={{ fontSize: 20 + "px" }}
            >
              <b>
                Generate Paid Tax <br /> Summary Report
              </b>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxPaymentHistory;
