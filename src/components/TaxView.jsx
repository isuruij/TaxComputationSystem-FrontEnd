import React from 'react'
import "../styles/TaxView.css"

function TaxView() {
  return (
    <div className='Tax-view-page'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
        <div className='Tax-view-header'>
            <h6>Mr.XXXXXX_XXX</h6>
            <h6>TIN NO: XXXXXXX</h6>
            <h6>INCOME TAX COMPUTATION REPORT</h6>
            <h6>YEAR OF ASSESSMENT 2022/2023</h6>
        </div>

        
            <div className='Total-liability'>
                <h4 className='Topic-1'>Total Tax Liability For Y/A 2022/23</h4>
                <div className='Tot-amount'>
                    LKR<br/>
                    <h1>589,400.00</h1>
                    <p>*This is not certified.</p>
                </div>
                <div className="nine-months"> 
                    <div><h6>Total Tax Liability for 09 Months</h6></div>
                    <div><h6>200,400.00LKR</h6></div>
                </div>
                <p className='small-p-one'>(01/04/2022-31/12/2022)</p>
                <div className="three-months"> 
                    <div><h6>Total Tax Liability for 09 Months</h6></div>
                    <div><h6>389,000.00LKR</h6></div>
                </div>
                <p className='small-p-one'>(01/01/2023-31/03/2023)</p>
            </div>

        <div className='container'>
            <div className='Cal-nine-months'>
                <h4 className='Topic-2'>Calculation For 09 Months</h4>
                <p className='Topic-2'>(01/04/2022-31/12/2022)</p>
                <div> 
                    <div><h6>Total Income for 09 Months</h6></div>
                    <div><h6>5,200,000.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6>Total Qualifing Payments & Reliefs</h6></div>
                    <div><h6>0.00LKR</h6></div>
                </div>
                <p className='small-p-two'>*Max upto 0.9M</p>
                <div> 
                    <div><h6>Total Tax Credits</h6></div>
                    <div><h6>0.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6>Total Taxable Income</h6></div>
                    <div><h6>1,700,000.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6><i className="fas fa-circle"></i>Tax on Total Taxable Income</h6></div>
                    <div><h6>200,400.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6><i className="fas fa-circle"></i>Tax On Other Benefits</h6></div>
                    <div><h6>0.00LKR</h6></div>
                </div>
                <p className='small-p-two'>(ex:-Terminal, Capital gain, etc.)</p>
                <div className='nine-liability'> 
                    <div><h4><i className="fas fa-star"></i>Total Tax Liability</h4></div>
                    <div><h4>200,400.00LKR</h4></div>
                </div>
            </div>

            <div className='Cal-three-months'>
                <h4 className='Topic-3'>Calculation For 03 Months</h4>
                <p className='Topic-3'>(01/01/2023-31/03/2023)</p>
                <div> 
                    <div><h6>Total Income for 03 Months</h6></div>
                    <div><h6>1,700,000.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6>Total Qualifing Payments & Reliefs</h6></div>
                    <div><h6>0.00LKR</h6></div>
                </div>
                <p className='small-p-two'>*Max upto 0.9M</p>
                <div> 
                    <div><h6>Total Tax Credits</h6></div>
                    <div><h6>0.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6>Total Taxable Income</h6></div>
                    <div><h6>1,700,000.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6><i className="fas fa-circle"></i>Tax on Total Taxable Income</h6></div>
                    <div><h6>389,000.00LKR</h6></div>
                </div>
                <div> 
                    <div><h6><i className="fas fa-circle"></i>Tax On Other Benefits</h6></div>
                    <div><h6>0.00LKR</h6></div>
                </div>
                <p className='small-p-two'>(ex:-Terminal, Capital gain, etc.)</p>
                <div className='three-liability'> 
                    <div><h4><i className="fas fa-star"></i>Total Tax Liability</h4></div>
                    <div><h4>389,000.00LKR</h4></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaxView