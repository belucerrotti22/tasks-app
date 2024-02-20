import React from 'react';
import { MdError } from "react-icons/md";
import "../css/ErrorItem.css"

function ErrorItem () {
  return(
    <div className='error-container'>
        <MdError></MdError>
        <p>ERROR :/</p>  
    </div>    
  )
}

export {ErrorItem}
