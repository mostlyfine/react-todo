import React from 'react';
import PropTypes from 'prop-types';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({task: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = this.state.task.trim();
    if (task) {
      this.props.onAddTask(task);
      this.setState({task: ''});
    }
  }

  render() {
    return (
      <form className="siimple-form" onSubmit={this.handleSubmit}>
        <input className="siimple-input" type="text" name="description" value={this.state.task} placeholder="What needs to be done?" onChange={this.handleChange} />
        <button className="siimple-btn siimple-btn--teal" type="submit">add</button>
      </form>
    );
  }
}

InputForm.propTypes = {
  onAddTask:  PropTypes.func.isRequired
};
