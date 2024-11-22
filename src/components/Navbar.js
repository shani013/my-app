import React , { useState } from 'react'

export default function Navbar(props) {
    const selectTheme = (color) => {
        setColor(color);
        document.body.style.backgroundColor=color;
    }
    const [color, setColor] = useState('white');
    
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
                                <div class="btn-group">
                                    <a type="button" class="nav-link  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Themes
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center" onClick={() => { selectTheme('red') }}>
                                                Red
                                                <span class="bi bi-square-fill text-danger"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center" onClick={() => { selectTheme('green') }} >
                                                Green
                                                <span class="bi bi-square-fill text-success"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center" onClick={()=>{selectTheme('blue')}} >
                                                Blue
                                                <span class="bi bi-square-fill text-primary"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item d-flex justify-content-between align-items-center" onClick={() => { selectTheme('yellow') }} >
                                                Yellow
                                                <span class="bi bi-square-fill text-warning"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                            <input className="form-check-input mx-1" type="checkbox" onClick={props.modeChange} role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        
                    </div>
                </div>
            </nav>
        )
    }

