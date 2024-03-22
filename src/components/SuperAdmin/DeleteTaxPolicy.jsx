import React, { useState } from 'react';
import './UpdateTaxPolicy.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function DeleteTaxPolicy() {
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
        <div className="outer1 embed-responsive  embed-responsive-16by9"> {/* cantainer1 out box */}
           <div className="button2 embed-responsive embed-responsive-16by9"> {/* cantainer2 button group */}
            <button type="button" className="btn btn-primary" id='update' >Update Policy</button> 
           <button type="button" className="btn btn-primary" id='create' >Create new Policy</button>
           <button type="button" className="btn btn-primary" id='remove' onClick={removeClick}>Remove</button>
           </div>
           


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
     </div>
  
    </>
    
    )




}
        
     
  
    
  


export default DeleteTaxPolicy;