import React, { Component } from "react";

class ToDoItems extends Component {
    constructor(props)
    {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key)
    {
        this.props.delete(key);
    }
    createTasks(item)
    {
        return  <React.Fragment><li key = {item.key}>{item.text}</li> <button id='Remove' onClick=  {() => this.delete(item.key)}>Remove</button>
        </React.Fragment>
            
    }

   // removeTasks(item)
   // {
    //    return <button onClick = {() => removeItem({key: item.key})}>Remove Task</button>
   // }
    render() {
        var toDoEntries = this.props.entries;
        var listItems = toDoEntries.map(this.createTasks);
        //var removeButtons = toDoEntries.map(this.removeTasks);
        return (
            <ul className ="theList">
                {listItems}
            </ul>
        );
    }
}; 


export default ToDoItems;