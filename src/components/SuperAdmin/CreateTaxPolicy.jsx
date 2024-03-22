import React, { useState } from 'react';
import './UpdateTaxPolicy.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function CreateTaxPolicy(){
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
      //const [updatePolicy, setUpdatePolicy] =useState([taxPolicies]);

      
        const [isEditing, setIsEditing] = useState(false);
        const [text, setText] = useState("thiruni");
    
        const startEditing = () => {
            setIsEditing(true);
        };
    
        const finishEditing = () => {
            setIsEditing(false);
        };
    
        const handleChange = (e) => {
            setText(e.target.value);
        };
    
      return(
        <>
        <div className="outer1 embed-responsive  embed-responsive-16by9"> {/* cantainer1 out box */}
           <div className="button2 embed-responsive embed-responsive-16by9"> {/* cantainer2 button group */}
            <button type="button" className="btn btn-primary" id='update' >Update Policy</button> 
           <button type="button" className="btn btn-primary" id='create' >Create new Policy</button>
           <button type="button" className="btn btn-primary" id='remove' >Remove</button>
           </div>
          { isEditing?  (
        <input
            value={text}
            className="bg-transparent border-2 border-black border-solid"
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    finishEditing();
                }
            }}
            onChange={handleChange}
            onBlur={finishEditing}
            autoFocus
        />
    ) : (
        <div className="select-none" onClick={startEditing}>
            {text}
        </div>
               )    }       </div>
           </>
      )
}

export default CreateTaxPolicy;