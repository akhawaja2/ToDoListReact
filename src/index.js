import React from "react";
import ReactDOM from "react-dom"
import "./index.css"
import ToDoList from "./ToDoList.js"
var destination = document.querySelector("#container");

//Renders hello to HTML Container div ID
ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);