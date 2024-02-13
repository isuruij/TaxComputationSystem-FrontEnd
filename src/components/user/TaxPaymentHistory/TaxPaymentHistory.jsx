import React from 'react'
import './TaxHistory.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function TaxPaymentHistory() {
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>

      <div className="divbuttongroup">
        <h1 style={{fontSize:50+'px'}}>TAX Payment History</h1>
        <div className="divbutton">
          <button type="button" className="btn btn-primary " style={{fontSize:20+'px'}}>Tax Status</button>
          <button type="button" className="btn btn-primary " style={{fontSize:20+'px'}}>Tax History</button>
          <button type="button" className="btn btn-primary " style={{fontSize:20+'px'}}>Tax Payment Update</button>
        </div>
      </div>

      <div className='dropdowntable'>
        <div className="dropdownPage">
          

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{padding: 2 + 'px',fontSize:22 +'px'}}>
              Paid Taxes
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{padding: 2 + 'px',fontSize:22 +'px'}}>
              All Transactions
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>


          
          
          
            
        

          <button class="btn btn-primary" type="button"  aria-expanded="false" style={{padding: 2 + 'px',fontSize:20+'px'}}>
              Serial Number
            <button class="btn btn-primary " type="button"   aria-expanded="false"style={{fontSize:20+'px'}}>
                11569
            </button>
          </button>
        </div>

        <div className="divtable">

          <table className="table">
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
              <tr>
                <td>2024-01-10</td>
                <td>10:34:56</td>
                <td>ABB</td>
                <td>#das345</td>
                <td>560900/=</td>
                
              </tr>
              <tr>
              <td>2024-01-10</td>
                <td>10:34:56</td>
                <td>ABB</td>
                <td>#das345</td>
                <td>560900/=</td>
                
              </tr>
              <tr>
              <td>2024-01-10</td>
                <td>10:34:56</td>
                <td>ABB</td>
                <td>#das345</td>
                <td>560900/=</td>
              </tr>

              <tr>
              <td>2024-01-10</td>
                <td>10:34:56</td>
                <td>ABB</td>
                <td>#das345</td>
                <td>560900/=</td>
              </tr>
              <tr>
              <td>2024-01-10</td>
                <td>10:34:56</td>
                <td>ABB</td>
                <td>#das345</td>
                <td>560900/=</td>
              </tr>
            </tbody>
          </table>
          <div className='taxSummarybutton'>
            <button type="button" className="btn btn-primary " style={{fontSize:20+'px'}}><b>Generate Paid Tax <br /> Summary Report</b> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaxPaymentHistory