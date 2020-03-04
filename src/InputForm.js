import React from 'react';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = this.refs.task.value.trim();
    if(task) {
      this.props.onAddTask(task);
      this.refs.task.value = '';
    }
  }

  render() {
    return (
      <form className="siimple-form" onSubmit={this.handleSubmit}>
        <input className="siimple-input" type='text' name='description' ref='task' placeholder="What needs to be done?" />
        <button className="siimple-btn siimple-btn--teal" type='submit'>add</button>
      </form>
    )
  }
}

