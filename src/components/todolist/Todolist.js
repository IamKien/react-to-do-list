import React from "react";

class Todolist extends React.Component{

  constructor(props){
    super(props)
  }

  
 

  render(){
    return(
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
          <input value={item.text} />

            <button onClick={() => this.props.delete(item.id)}
            >
              Delete
            </button>
            <button>
              Edit
            </button>
          </li>

        ))}

      </ul>
    );
  }
}

export default Todolist;