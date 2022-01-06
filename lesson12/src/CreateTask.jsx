import React, { Component } from "react";
import PropTypes from 'prop-types'

class CreateTask extends Component {
    state = {
        value: ''
    }
    handleChange = event => {
        this.setState({
          value: event.target.value,
        });
      };
    handleTaskCreate = () => {
        if (!this.state.value) {
            return;
          }
        this.props.onCreate(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
            <div className="create-task">
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="create-task__input"
                />
                <button className="btn create-task__btn" onClick={this.handleTaskCreate}>Create</button>
            </div>
        );
    }
}
CreateTask.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default CreateTask;
// 1.Take text from input+++
// 2. Create task with this text+++
// 3. add task to taskList+++