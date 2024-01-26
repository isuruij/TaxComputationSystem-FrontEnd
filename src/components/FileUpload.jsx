import React from "react";
import { useState } from "react";
import "../styles/FileUpload.css";



function FileUpload() {
  const [file, setFile] = useState();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  function handleFile(event) {
    setFile(event.target.files[0]);
    //console.log(event.target.files[0])
  }
  function handleUpload() {
    const formData = new FormData();
    formData.append("file", file);
    fetch("*****URL****", {
      method: "POST",
      body: formData,
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log("Success", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }


  return (
    <div className="Upload-Doc-div">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <h2 className="main-topic">Upload Documents</h2>
      <form>
        <h3 className="sub-topic">Total Assessable Income{!show1 && <i className="fas fa-caret-down fa-lg" onClick={() => {setShow1(true)}}></i>}{show1 && <i id="uparrow" className="fas fa-caret-down fa-rotate-180 fa-lg" onClick={() => {setShow1(false)}}></i>}</h3>

        {show1 && <div className="Container1">
          <div className="div1-1">
            <div className="div1-1-1">
              <label><h6>Employment Income</h6></label>
            </div>
            <div className="div1-1-2">
              <input type="file" name="file" onChange={handleFile} />
            </div>
          </div>

          <div className="div1-2">
            <div className="div1-2-1">
              <label><h6>Business Income</h6></label>
            </div>
            <div className="div1-2-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>

          <div className="div1-3">
            <div className="div1-3-1">
              <label><h6>Investment Income</h6></label>
            </div>
            <div className="div1-3-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>

          <div className="div1-4">
            <div className="div1-4-1">
              <label><h6>Other Income</h6></label>
            </div>
            <div className="div1-4-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>
        </div>}

        <h3 className="sub-topic">Qualifying Payments & Reliefs{!show2 && <i className="fas fa-caret-down fa-lg" onClick={() => {setShow2(true)}}></i>}{show2 && <i className="fas fa-caret-down fa-rotate-180 fa-lg" id="uparrow" onClick={() => {setShow2(false)}}></i>}</h3>

        {show2 && <div className="Container2">
          <div className="div2-1">
            <div className="div2-1-1">
              <label><h6>Relief for Rent Income(For last year)</h6></label>
            </div>
            <div className="div2-1-2">
              <input type="file" name="file" onChange={handleFile} />
            </div>
          </div>

          <div className="div2-2">
            <div className="div2-2-1">
              <label><h6>Relief for Expenditure</h6></label>
            </div>
            <div className="div2-2-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>

          <div className="div2-3">
            <div className="div2-3-1">
              <label><h6>Qualifying Payments</h6></label>
            </div>
            <div className="div2-3-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>
        </div>}

        <h3 className="sub-topic">Tax Credit{!show3 && <i className="fas fa-caret-down fa-lg" onClick={() => {setShow3(true)}}></i>}{show3 && <i className="fas fa-caret-down fa-rotate-180 fa-lg" id="uparrow" onClick={() => {setShow3(false)}}></i>}</h3>

        {show3 && <div className="Container3">
          <div className="div3-1">
            <div className="div3-1-1">
              <label><h6>APIT</h6></label>
            </div>
            <div className="div3-1-2">
              <input type="file" name="file" onChange={handleFile} />
            </div>
          </div>

          <div className="div3-2">
            <div className="div3-2-1">
              <label><h6>WHT on Investment Income</h6></label>
            </div>
            <div className="div3-2-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>

          <div className="div3-3">
            <div className="div3-3-1">
              <label><h6>WHT on Service Fee Received</h6></label>
            </div>
            <div className="div3-3-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>

          <div className="div3-4">
            <div className="div3-4-1">
              <label><h6>Self Assessment Payments</h6></label>
            </div>
            <div className="div3-4-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>
        </div>}

        <h3 className="sub-topic">Other{!show4 && <i className="fas fa-caret-down fa-lg" onClick={() => {setShow4(true)}}></i>}{show4 && <i className="fas fa-caret-down fa-rotate-180 fa-lg" id="uparrow" onClick={() => {setShow4(false)}}></i>}</h3>

        {show4 && <div className="Container4">
          <div className="div4-1">
            <div className="div4-1-1">
              <label><h6>Terminal Benefits</h6></label>
            </div>
            <div className="div4-1-2">
              <input type="file" name="file" onChange={handleFile} />
            </div>
          </div>

          <div className="div4-2">
            <div className="div4-2-1">
              <label><h6>Capital Value & Gain</h6></label>
            </div>
            <div className="div4-2-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>

          <div className="div4-3">
            <div className="div4-3-1">
              <label><h6>WHT which is not deducted</h6></label>
            </div>
            <div className="div4-3-2">
             <input type="file" name="file" onChange={handleFile} />
            </div>  
          </div>
        </div>}

        <div className="Button-div">
          <div className="Button-div-1"><button id="back" className="btn btn-primary">Back</button></div>
          <div className="Button-div-2"><button id="submit" className="btn btn-primary" onClick={handleUpload}>
          Save & Continue
          </button></div>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
