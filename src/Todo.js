import React from 'react';
import InputForm from './InputForm';
import ItemList from './ItemList';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['hello','world']
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleAddTask(task) {
    if(task) {
      const tasks = this.state.tasks;
      this.setState({tasks: tasks.concat(task)});
    }
  }

  handleDeleteTask(index) {
    const tasks = this.state.tasks;
    this.setState({tasks: tasks.filter((value, i, array) => i !== index)});
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <InputForm onAddTask={this.handleAddTask} />
        <ItemList tasks={this.state.tasks} onDeleteTask={this.handleDeleteTask} />
      </div>
    );
  }
}
