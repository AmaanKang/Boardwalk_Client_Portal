﻿import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
class SignDocs extends React.Component<{}, { shown: boolean }> {
    constructor() {
        super({}, {});
        this.state = {
            shown: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ shown: true });
    };

    hideModal = () => {
        this.setState({ shown: false });
    };
    public render() {

        return (
            <React.Fragment>
                <NavMenu/>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-8'>
                        <h1>Signed Documents</h1>
                        <p>Click on a document to view or download it</p>
                        <NavLink tag={Link} onClick={this.showModal}>Document 1</NavLink><br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 2</NavLink><br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 3</NavLink><br />
                        <button>Upload new Document</button>
                        <br /><br /><br />
                        <h1>New Uploaded Documents</h1>
                        <NavLink tag={Link} onClick={this.showModal}>Document 1</NavLink> - Under Review<br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 2</NavLink> - Accepted <button>x</button><br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 3</NavLink> - Rejected <button>x</button><br />
                        <Popup show={this.state.shown} handleClose={this.hideModal}>
                            <p>Modal</p>
                        </Popup>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(SignDocs);