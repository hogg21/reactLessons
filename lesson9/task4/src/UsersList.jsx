import React from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {
    state = {
        value: ''
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        const users = this.props.users;
        const resultList = (
            this.state.value === '' ? users : users.filter(user => user.name.toLowerCase().includes(this.state.value.toLowerCase()))
            .map(user => <User key={user.id} name={user.name} age={user.age}></User>)
        )
        return (
            <>
                <Filter filterText={this.state.value} count={resultList.length} onChange={this.handleChange}></Filter>
                <ul className="users">{resultList}</ul>
            </>
        );
    }
}
export default UsersList;