import React from 'react'
import '../../css/Session.css';
import Sessionimg from "../../img/session.jpg";
import Form from '../../layouts/MainLayout/components/Form'

export default function Session() {
    return (
        <div className  ="container-fluid">
            <div className="row">
                <div className="col-7 d-none d-sm-block">
                    <img src={Sessionimg} alt="Img" className="img" />
                </div>
                <div className="col-5">
                    <Form />
                </div>
            </div>
        </div>
    )
}
