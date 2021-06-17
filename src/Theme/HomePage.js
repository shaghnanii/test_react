import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {fetchUsers} from "../Redux";

function HomePage({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className={'container'}>
            <div className="alert alert-success">Welcome to Home Page</div>
            <h1>API FETCH CALL</h1>

            <Link to={'/test'}>
                <Button variant="danger">
                    GOTO TEST PAGE
                </Button>
            </Link>

            {
                userData &&
                    userData.users &&
                    userData.users.map(user =>
                        <div className={'container'}>
                            <span className={'badge badge-danger'}>
                                { user.name }
                            </span>
                        </div>
                    )
            }

        </div>

    )
}
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)