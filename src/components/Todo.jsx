import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

class Todo extends React.Component {
  //state = {  }

  constructor(props) {
    super(props);
    this.state = { todo: this.props.todo };
  }

  handleToggleTodo = () => {
    this.props.toggleTodo(this.state.todo.id);
  }

  render() { 
    return ( 
      <li
        className="todo-item"
        onClick={this.handleToggleTodo} /** dispatches action to toggle todo */
      >
        {(this.props.todo && this.props.todo.completed) ? "👌" : "👋"}{" "}
        <span
          className={cx(
            "todo-item__text",
            this.state.todo && this.state.todo.completed && "todo-item__text--completed"
          )}
        >
          {this.state.todo.content}
        </span>
      </li>
     );
  }
}
 
//export default Todo;

// const Todo = ({ todo }) => (
//   <li
//     className="todo-item"
//     onClick={() => {
//       toggleTodo(todo.id);
//     } /** dispatches action to toggle todo */}
//   >
//     {(todo && todo.completed) ? "👌" : "👋"}{" "}
//     <span
//       className={cx(
//         "todo-item__text",
//         todo && todo.completed && "todo-item__text--completed"
//       )}
//     >
//       {todo.content}
//     </span>
//   </li>
// );

// export default Todo;
export default connect(null, { toggleTodo })(Todo);
