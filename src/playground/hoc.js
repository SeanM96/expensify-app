// Higher order component - a component that renders another component
// Reuse code
// Render hijacking
// Props manipulation
// Abstract state
import React from 'react'
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>ndjn</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not logged in</p> }
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

withAdminWarning(Info);
ReactDOM.render(<AuthInfo isAuthenticated info="these are the details" />, document.getElementById('app'));