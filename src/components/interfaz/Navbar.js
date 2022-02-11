import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export const Navbar = () => {

    const {logout, user} = useAuth0();
    const handleLogout = () => logout({
        returnTo: window.location.origin
    })

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                <img src={user.picture} alt={user.name} />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link active' + (isActive ? 'active': '')} 
                        to="/pokemon"
                    >
                        Rentar Pokemon
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => 'nav-item nav-link active' + (isActive ? 'active': '')} 
                        to="/buscar"
                    >
                        Buscar Pokemon
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-info'>
                        Bienvenido: {user.name}
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}