import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg class="bi" width="30" height="24"></svg>
                        </a>
                        <span class="text-muted">&copy; 2021 Company, Inc</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><NavLink className="text-muted" to="/login">Login</NavLink></li>
                        <li class="ms-3"><NavLink className="text-muted" to="/File%20Report">File a Report</NavLink></li>
                        <li class="ms-3"><NavLink className="text-muted" to="/Awareness%20Programs">Awareness Program</NavLink></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer