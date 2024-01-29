import React from 'react'
import DropDown from './TaxHistorySubComponents/DropDown'
import ButtonGroup from './TaxHistorySubComponents/ButtonGroup'
import Table from './TaxHistorySubComponents/Table'
import '../style/TaxHistory.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function TaxPaymentHistory() {
  return (
    <div>
        <ButtonGroup />
        <DropDown />
        <Table />
    </div>
  )
}

export default TaxPaymentHistory