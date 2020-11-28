import React from 'react'

export default function Price() {
  return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">2-12 personas</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$30.000 <small className="text-muted">/ pesos</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn btnpre btn-lg btn-block">Ordenar</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">12-32 personas</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$40.000 <small className="text-muted">/ pesos</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn btnpre btn-lg btn-block ">Ordenar</button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">32 en adelante</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$80.000 <small className="text-muted">/ pesos</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn btnpre btn-lg btn-block">Ordenar</button>
            </div>
          </div>
        </div>
      </div>
    )
}
