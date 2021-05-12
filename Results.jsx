const Results = props => {
    
    return (
        <div>
            <p>Username: {props.inputs.username}</p>
            <p>Firstname: {props.inputs.firstName}</p>
            <p>Lastname: {props.inputs.lastName}</p>
            <p>Email: {props.inputs.email}</p>
            <p>Password: {props.inputs.password}</p>
            <p>COnfirm Password: {props.inputs.confirmPassword}</p>
        </div>
    )
}
export default Results;