import React from 'react'
import Chocolate from "../../../img/chocolate.png";
import Fresas from "../../../img/fresas.png";
import Harina from "../../../img/harina.png"

export default function Ingredients() {
    return (
        <div className="container services">
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src={Chocolate} alt="Generic placeholder" width="140" height="140" />
                    <h2>Chocolate</h2>
                    <p>Lorem aliqua ut nisi deserunt quis esse commodo adipisicing culpa. Ut in ad quis irure sunt aliquip Lorem nulla incididunt. Minim nulla minim nisi ad dolore enim dolore labore voluptate do nostrud non duis ad. Officia id consectetur amet in commodo fugiat. Ex consectetur aliqua proident fugiat dolor.</p>
                    <p><a className="btn btning" href="/#" role="button">Ver Detalles »</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src={Fresas} alt="Generic placeholder" width="140" height="140" />
                    <h2>Frutos</h2>
                    <p>Lorem aliqua ut nisi deserunt quis esse commodo adipisicing culpa. Ut in ad quis irure sunt aliquip Lorem nulla incididunt. Minim nulla minim nisi ad dolore enim dolore labore voluptate do nostrud non duis ad. Officia id consectetur amet in commodo fugiat. Ex consectetur aliqua proident fugiat dolor.</p>
                    <p><a className="btn btning" href="/#" role="button">Ver Detalles »</a></p>
                </div>
                <div className="col-lg-4">
                <img className="rounded-circle" src={Harina} alt="Generic placeholder" width="140" height="140" />
                    <h2>Harina</h2>
                    <p>Lorem aliqua ut nisi deserunt quis esse commodo adipisicing culpa. Ut in ad quis irure sunt aliquip Lorem nulla incididunt. Minim nulla minim nisi ad dolore enim dolore labore voluptate do nostrud non duis ad. Officia id consectetur amet in commodo fugiat. Ex consectetur aliqua proident fugiat dolor.</p>
                    <p><a className="btn btning" href="/#" role="button">Ver Detalles »</a></p>
                </div>
            </div>
        </div>
    )
}
