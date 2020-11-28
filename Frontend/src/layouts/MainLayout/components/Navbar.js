import React from 'react'

export default function navbar() {
    return (
        <nav className="navbar ml-md-3 mr-md-3 nav navbar-expand-lg navbar-dark sticky-top" id="mu-header">
            <a className="navbar-brand" href="/#">Hello Kitty</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#Ingredientes">Ingredientes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#Portafolio">Portafolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#Precio">Precios</a>
                    </li>
                </ul>
                <div className="float-md-right">
                <a className="btn btnnav" href="/session">Intranet</a>
                </div>
            </div>
        </nav>
    )
}
