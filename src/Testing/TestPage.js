import React, {useEffect, useState} from 'react'
import { Modal, Button, Alert } from 'react-bootstrap';
import toastr from "toastr";
import 'bootstrap/dist/css/bootstrap.min.css';
import "toastr/build/toastr.min.css";
import {Link} from "react-router-dom";

import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'

function TestPage ({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleToastr = () => {
        var opts = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-top-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "6000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "swing",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr.success('Success Toasr is here.', 'Success Message', opts);
        toastr.error('Here is a failure message', 'Failure Message', opts);
        toastr.warning('Here is a warning message', 'Warning Message', opts);
        toastr.success('Here is a success message with timeout.', 'Success Timeout Message', opts);

    }
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div className={'container'}>
            <h1 className={'justify-text'}>Welcome to ReactJs</h1>

            <Button variant={'secondary'} onClick={handleToastr}>Show Toast Message</Button>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Link to={'/'}>
                <Button variant="danger">
                    GOTO Fetch Data Page
                </Button>
            </Link>

            {userData &&
                userData.users &&
                userData.users.map(user =>
                    <div className={'alert alert-danger'}>
                        <div className={'badge badge-primary'}>{ user.name }</div>
                    </div>
                )}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
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
)(TestPage)