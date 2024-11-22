import React from 'react'

export default function Navbar(props) {
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid d-flex">
                    <a className="navbar-brand" href="#">{props.name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        
                        <form className=" mt-2 mt-lg-0 d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="form-check form-switch">
                            <input className="form-check-input mx-1" type="checkbox" onClick={props.modeChange} role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                        
                    </div>
                </div>
            </nav>
    
  )
}
