import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi" width="30" height="24"></svg>
                        </a>
                        <span className="text-muted">&copy; 2021 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><NavLink className="text-muted" to="/login">Login</NavLink></li>
                        <li className="ms-3"><NavLink className="text-muted" to="/File%20Report">File a Report</NavLink></li>
                        <li className="ms-3"><NavLink className="text-muted" to="/Awareness%20Programs">Awareness Program</NavLink></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer