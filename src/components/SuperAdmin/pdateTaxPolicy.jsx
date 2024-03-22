
import React, { useState } from 'react';
import './UpdateTaxPolicy.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../assets/red-cross-button-in-round-shape-png.svg';

 

function UpdateTaxPolicy() {

    

    const [isUpdateClicked, setIsUpdateClicked] = useState(false);

    const handleUpdateButtonClick = () => {
    setIsUpdateClicked(true);
    setCloseUpdate(true);
    };

    const handleButtonClick = (e) =>{
        const {name}=e.target
        const onchangeVal = [...updatePolicy,{policy:""}]
        onchangeVal[name]=value
        setUpdatePolicy(onchangeVal)
    }  

    const taxPolicies = [
        {
          title: 'Income Tax',
          details: [
            'Progressive tax rates based on income levels.',
            'Deductions for specific expenses (e.g., education expenses, mortgage interest).',
            'Type here...'
          ]
        },
        {
          title: 'Corporate Tax',
          details: [
            'Flat or progressive tax rates on business profits.',
            'Tax incentives for certain industries or activities.'
          ]
        },
        {
          title: 'Property Tax',
          details: [
            'Progressive tax rates based on income levels.',
            'Deductions for specific expenses (e.g., education expenses, mortgage interest).'
          ]
        },
        {
          title: 'Value Added Tax (VAT) or Goods and Services Tax (GST)',
          details: [
            'Consumption-based tax on goods and services.',
            'Different tax rates for different types of goods and services.'
          ]
        },
        {
            title: 'Income Tax',
            details: [
              'Progressive tax rates based on income levels.',
              'Deductions for specific expenses (e.g., education expenses, mortgage interest).'
            ]
          },
          {
            title: 'Capital Gains Tax',
            details: [
              'Tax on profits from the sale of assets like stocks, real estate, or other investments.',
              'Different rates for short-term and long-term gains.'
            ]
          },
          {
            title: 'Inheritance Tax or Estate Tax',
            details: [
              'Tax on the transfer of assets upon an individual\'s death.',
              'Exemptions and deductions may apply.'
            ]
          },
          {
            title: 'Excise Tax',
            details: [
              'Taxes on specific goods such as alcohol, tobacco, or gasoline.',
              'Intended to discourage the consumption of certain products.'
            ]
          },
          {
            title: 'Payroll Taxes',
            details: [
              'Taxes withheld from employees\' wages to fund social security and other benefits.',
              'Employers also contribute.'
            ]
          }
      ];
      const [updatePolicy, setUpdatePolicy] =useState([taxPolicies]);
      
    // add policy using array

    const [titlee,setTitlee] = useState("");
    const [detaill, setDetaill] = useState("");
    const [policyList,setPolicyList] = useState ([]);
    const addPolicy = () =>{
      setCloseUpdate(false);
      const newPolicy ={titlee,detaill}
        if(titlee&&detaill){
          setPolicyList((ls)=>[...ls,newPolicy])
          const concatenatedArray = [...taxPolicies,...policyList];
          setUpdatePolicy(concatenatedArray);
        }
    }

    const [closeUpdate,setCloseUpdate] =useState("ture");
    const closeTab =()=>{
      setCloseUpdate(false);
    }

    // delete button
    const [checkBoxes,setCheckBoxes] = useState(false);
    const removeClick =() =>{
      setCheckBoxes(true);
    }

    // delete policy
    const [checkedIndexes, setCheckedIndexes] = useState([]); // Track checked indexes

    const handleCheckboxChange = (index) => {
      const isChecked = checkedIndexes.includes(index);
    if (isChecked) {
      setCheckedIndexes(checkedIndexes.filter((idx) => idx !== index)); // Remove index if it's checked
    } else {
      setCheckedIndexes([...checkedIndexes, index]); // Add index if it's unchecked
    }
      const updatedPolicies = [...updatePolicy];
      updatedPolicies.splice(index,1 );
      setUpdatePolicy(updatedPolicies);

    };
    
  return (
    <>
     <div className="outer1 embed-responsive embed-responsive-16by9"> {/* cantainer1 out box */}
        <div className="button2 embed-responsive embed-responsive-16by9"> {/* cantainer2 button group */}
        <button type="button" className="btn btn-primary" id='update' onClick={handleButtonClick}>Update Policy</button>
        <button type="button" className="btn btn-primary" id='create' onClick={handleUpdateButtonClick}>Create new Policy</button>
        <button type="button" className="btn btn-primary" id='remove' onClick={removeClick}> Remove</button>
        </div>

        <div className='policies3 '>
            {taxPolicies.map((policy, index) => (
                <div key={index} className='container4_policy'> {/* tax policies */}
                <b>{policy.title} :</b>
                <ul>
                {policy.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
                ))}
                </ul>
                </div>
                ))}

      {
          policyList.map((policyy, i) => (
            <div key={i} className='container4_policy ' > {/* tax policies */}
            <b>{policyy.titlee} :</b>
            <ul>
            
            <li >{policyy.detaill}</li>
            
            </ul>
            </div>
            ))
      }
        </div>


        

    </div>
    {/* when update button clicked then appear this one */}

    {
        isUpdateClicked && 


                (closeUpdate&&(<div  className="cantainer5_policy " >
                  <img src={img1} alt="" className='img1' onClick={closeTab}/>
                 <br />
                <input type="text" className='policy'
                placeholder="New Policy Title"
                onChange={(e) => setTitlee( e.target.value) } />
                <br />
                <br />

                <input type="text" className="policy" 
                placeholder="New Policy Detail"
                onChange={(e) => setDetaill( e.target.value)}/>
                <button className="btn btn-primary" id='update' onClick={addPolicy}>Update Policy</button>
                
                </div>))
      }
        
     {/* setcheck boxes for deleting */}

     {
      checkBoxes &&
         
           (taxPolicies.map((taxPolicy,taxI) =>(
            
           <div  className='container4_policy'> {/* tax policies */}
           {!checkedIndexes.includes(taxI) && ( // Render only if it's not checked
          
          <>
          <input
             key={taxI}
            type="checkbox"
            // checked={isChecked}
             onChange={() => handleCheckboxChange(taxI)}
          />
          <b>{taxPolicy.title} :</b>
           <ul>
           {taxPolicy.details.map((d, detailIndex1) => (
           <li key={detailIndex1}>{d}</li>
           ))}
           </ul>
           </>
           )}
           </div>
           )))
           
        
      
     }
  
    </>
  )
}

export default UpdateTaxPolicy