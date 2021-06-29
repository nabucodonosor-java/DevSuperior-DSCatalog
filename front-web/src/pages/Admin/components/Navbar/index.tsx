import React from 'react';
import { NavLink } from 'react-router-dom';
import { isAllowebByRole } from 'core/utils/auth';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-nav-container">
        <ul> 
            <li>
                <NavLink to="/admin/products" className="admin-nav-item">
                    Produtos
                </NavLink>
            </li>
            <li>
                <NavLink to="/admin/categories" className="admin-nav-item">
                    Categorias
                </NavLink>
            </li>
            {isAllowebByRole(['ROLE_ADMIN']) && (
                <li>
                <NavLink to="/admin/users" className="admin-nav-item">
                    Usuários
                </NavLink>
            </li>
            )}
        </ul>
    </nav>
);

export default Navbar;