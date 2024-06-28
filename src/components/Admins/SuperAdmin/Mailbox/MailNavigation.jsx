import React from 'react'
import inbox from "../../../../assets/inbox-solid.svg"
import compose from "../../../../assets/compose.svg"
import sent from "../../../../assets/sent.svg"
import { useNavigate } from 'react-router-dom'

export default function MailNavigation() {
    const navigate = useNavigate();
  return (
    <div>
        <div style={{margin:"40px"}}>
            <div> <button type="button" className="btn btn-success" style={{margin:"10px", width:"150px"}} onClick={() => {navigate("/MailboxCompose")}}> <img src={compose} alt="" style={{width:"20px", marginRight:"5px"}} /> Compose</button></div>
            <div><button type="button" className="btn btn-success" style={{margin:"10px" , width:"150px"}} onClick={() => {navigate("/MailboxInbox")}}><img src={inbox} alt="" style={{width:"22px", marginRight:"10px"}} /> InBox</button></div>
            <div> <button type="button" className="btn btn-success" style={{margin:"10px" , width:"150px"}}onClick={() => {navigate("/MailSent")}}><img src={sent} alt="" style={{width:"27px", marginRight:"10px"}} /> Sent</button></div> 
        </div>
    </div>
  )
}
