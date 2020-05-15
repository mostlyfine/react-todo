import React from 'react';
import PropTypes from 'prop-types';

export default class ItemList extends React.Component {
  handleDelete(i) {
    this.props.onDeleteTask(i);
  }

  render() {
    const list = this.props.tasks.map((task, i) => (
      <li className="siimple-list-item siimple--bg-white" key={i}>
        {task}
        <span className="siimple-tag siimple-tag--red siimple-floart-right" onClick={this.handleDelete.bind(this, i)}>delete</span>
      </li>
    ));
    return <ul>{list}</ul>;
  }
}

ItemList.propTypes = {
  onDeleteTask:  PropTypes.func.isRequired,
  tasks: PropTypes.array
};
