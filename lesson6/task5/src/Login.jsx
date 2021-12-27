import React from "react";

const Login = (props) => {
    const { onLogin } = props;
    return (
        <button className="login btn" onClick={onLogin}>Login</button>
    );
}
export default Login;