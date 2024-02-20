import React from "react";
import ReactDOM from "react-dom";
import { NewTask } from "./components/NewTask";

function Modal () {
    return ReactDOM.createPortal(
        <NewTask/>, document.getElementById('modal')
    )
}

export { Modal }