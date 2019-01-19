import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class TodoList extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { items: ["hello", "world", "click", "me"] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([prompt("Enter Task ToDo")]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.slice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <CSSTransition in={true} appear={true} timeout={5000} classNames="fade">
          <div>{items}</div>
        </CSSTransition>
      </div>
    );
  }
}

export default TodoList;
