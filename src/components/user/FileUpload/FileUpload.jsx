import React from "react";
import { useState } from "react";
import "./FileUpload.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function FileUpload() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  //navigator
  const navigate = useNavigate();

  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [file4, setFile4] = useState();
  const [file5, setFile5] = useState();
  const [file6, setFile6] = useState();
  const [file7, setFile7] = useState();
  const [file8, setFile8] = useState();
  const [file9, setFile9] = useState();
  const [file10, setFile10] = useState();
  const [file11, setFile11] = useState();
  const [file12, setFile12] = useState();
  const [file13, setFile13] = useState();
  const [file14, setFile14] = useState();

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  function handleUpload() {
    const files = [
      { file: file1, id: 1 },
      { file: file2, id: 2 },
      { file: file3, id: 3 },
      { file: file4, id: 4 },
      { file: file5, id: 5 },
      { file: file6, id: 6 },
      { file: file7, id: 7 },
      { file: file8, id: 8 },
      { file: file9, id: 9 },
      { file: file10, id: 10 },
      { file: file11, id: 11 },
      { file: file12, id: 12 },
      { file: file13, id: 13 },
      { file: file14, id: 14 },
    ];
    const formData = new FormData();
    files.forEach((item) => {
      if (item.file) {
        // Only append if the file is defined
        formData.append("files", item.file);
        formData.append("fileIds", item.id);
      }
    });

    axios
      .post(`${base_url}/api/taxpayer/fileUpload/${userId}`, formData)
      .then((response) => {
        console.log(response);
        navigate("/settings/basic");
      })
      .catch((er) => console.log(er));
  }

  return (
    <div className="Upload-Doc-div">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      ></link>
      <h2 className="main-topic">Upload Documents</h2>
      <form>
        <h3 className="sub-topic">
          Total Assessable Income
          {!show1 && (
            <i
              className="fas fa-caret-down fa-lg"
              onClick={() => {
                setShow1(true);
              }}
            ></i>
          )}
          {show1 && (
            <i
              id="uparrow"
              className="fas fa-caret-down fa-rotate-180 fa-lg"
              onClick={() => {
                setShow1(false);
              }}
            ></i>
          )}
        </h3>

        {show1 && (
          <div className="Container1">
            <div className="div1-1">
              <div className="div1-1-1">
                <label>
                  <h6>Employment Income</h6>
                </label>
              </div>
              <div className="div1-1-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile1(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div1-2">
              <div className="div1-2-1">
                <label>
                  <h6>Business Income</h6>
                </label>
              </div>
              <div className="div1-2-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile2(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div1-3">
              <div className="div1-3-1">
                <label>
                  <h6>Investment Income</h6>
                </label>
              </div>
              <div className="div1-3-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile3(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div1-4">
              <div className="div1-4-1">
                <label>
                  <h6>Other Income</h6>
                </label>
              </div>
              <div className="div1-4-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile4(e.target.files[0])}
                />
              </div>
            </div>
          </div>
        )}

        <h3 className="sub-topic">
          Qualifying Payments & Reliefs
          {!show2 && (
            <i
              className="fas fa-caret-down fa-lg"
              onClick={() => {
                setShow2(true);
              }}
            ></i>
          )}
          {show2 && (
            <i
              className="fas fa-caret-down fa-rotate-180 fa-lg"
              id="uparrow"
              onClick={() => {
                setShow2(false);
              }}
            ></i>
          )}
        </h3>

        {show2 && (
          <div className="Container2">
            <div className="div2-1">
              <div className="div2-1-1">
                <label>
                  <h6>Relief for Rent Income(For last year)</h6>
                </label>
              </div>
              <div className="div2-1-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile5(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div2-2">
              <div className="div2-2-1">
                <label>
                  <h6>Relief for Expenditure</h6>
                </label>
              </div>
              <div className="div2-2-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile6(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div2-3">
              <div className="div2-3-1">
                <label>
                  <h6>Qualifying Payments</h6>
                </label>
              </div>
              <div className="div2-3-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile7(e.target.files[0])}
                />
              </div>
            </div>
          </div>
        )}

        <h3 className="sub-topic">
          Tax Credit
          {!show3 && (
            <i
              className="fas fa-caret-down fa-lg"
              onClick={() => {
                setShow3(true);
              }}
            ></i>
          )}
          {show3 && (
            <i
              className="fas fa-caret-down fa-rotate-180 fa-lg"
              id="uparrow"
              onClick={() => {
                setShow3(false);
              }}
            ></i>
          )}
        </h3>

        {show3 && (
          <div className="Container3">
            <div className="div3-1">
              <div className="div3-1-1">
                <label>
                  <h6>APIT</h6>
                </label>
              </div>
              <div className="div3-1-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile8(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div3-2">
              <div className="div3-2-1">
                <label>
                  <h6>WHT on Investment Income</h6>
                </label>
              </div>
              <div className="div3-2-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile9(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div3-3">
              <div className="div3-3-1">
                <label>
                  <h6>WHT on Service Fee Received</h6>
                </label>
              </div>
              <div className="div3-3-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile10(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div3-4">
              <div className="div3-4-1">
                <label>
                  <h6>Self Assessment Payments</h6>
                </label>
              </div>
              <div className="div3-4-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile11(e.target.files[0])}
                />
              </div>
            </div>
          </div>
        )}

        <h3 className="sub-topic">
          Other
          {!show4 && (
            <i
              className="fas fa-caret-down fa-lg"
              onClick={() => {
                setShow4(true);
              }}
            ></i>
          )}
          {show4 && (
            <i
              className="fas fa-caret-down fa-rotate-180 fa-lg"
              id="uparrow"
              onClick={() => {
                setShow4(false);
              }}
            ></i>
          )}
        </h3>

        {show4 && (
          <div className="Container4">
            <div className="div4-1">
              <div className="div4-1-1">
                <label>
                  <h6>Terminal Benefits</h6>
                </label>
              </div>
              <div className="div4-1-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile12(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div4-2">
              <div className="div4-2-1">
                <label>
                  <h6>Capital Value & Gain</h6>
                </label>
              </div>
              <div className="div4-2-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile13(e.target.files[0])}
                />
              </div>
            </div>

            <div className="div4-3">
              <div className="div4-3-1">
                <label>
                  <h6>WHT which is not deducted</h6>
                </label>
              </div>
              <div className="div4-3-2">
                <input
                  type="file"
                  name="files"
                  onChange={(e) => setFile14(e.target.files[0])}
                />
              </div>
            </div>
          </div>
        )}

        <div className="Button-div">
          {/* <div className="Button-div-1">
             <button id="back" className="btn btn-primary">
              Back
            </button> 
          </div> */}
          <div className="Button-div-2">
            <button
              id="submit"
              className="btn btn-primary"
              onClick={() => handleUpload()}
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
