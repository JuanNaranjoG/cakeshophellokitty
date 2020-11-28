import React from 'react'
import p1_1 from "../../../img/p1_1.png"
import p1_2 from "../../../img/p1_2.png"

export default function Products1() {
    return (
        <div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                
                <div className="pdiva mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <img src={p1_1} className="pimg" alt="p1_1" /> 
                </div>
                <div className="pdivr mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Another headline</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                   <img src={p1_2} className="pimg" alt="p1_2" />
                </div>
            </div>
        </div>
    )
}
