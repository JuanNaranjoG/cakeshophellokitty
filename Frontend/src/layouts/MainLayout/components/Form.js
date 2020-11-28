import React, { useState } from 'react'



export default function Form() {

    const [datos, setdatos] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        setdatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form className="form-signin needs-validation"  action="http://localhost:4000/api/session" method='POST' >
            <h1 className="h4 mb-3 font-weight-normal"><font className="formv"><font className="formv">Iniciar Sesión</font></font></h1>
            <div className="mb-2">
                <label htmlFor="inputEmail" className=""><font className="formv"><font className="formv">Correo</font></font></label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Correo"
                    required
                    autoFocus=""
                    name="email"
                    onChange={handleInputChange}
                />
                <div className="valid-tooltip">
                    Looks good!
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="inputPassword" className=""><font className="formv"><font className="formv">Contraseña</font></font></label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Contraseña"
                    required
                    name="password"
                    onChange={handleInputChange}
                />
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" />
                    <font className="formv">
                        <font className="formv"> Recuérdame
                        </font>
                    </font>
                </label>
            </div>
            <button
                className="btn btnform btn-lg btn-block"
                type="submit"
            >
                <font className="formv"><font className="formv">Aceptar</font></font></button>
            <p className="mt-5 mb-3 text-muted"><font className="formv"><font className="formv">© Cake Shop Hello Kitty 2020</font></font></p>
            {/* <Route>
                {sesion ? <Redirect to={{
                    pathname: '/administracion/inicio',
                    state:1,
                    sesion:true
                }} /> : <Redirect to="/" />}
            </Route> */}
        </form>

    )
}
