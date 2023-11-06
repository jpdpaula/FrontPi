import React from 'react';
import './Navbar.css';
import { Link , useLocation} from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    return(
        <>
        <div className='container'>
            <div className='container-nav'>
                <div className='logo'>
                    <img src='https://germanlightproducts.com/wp-content/uploads/2020/10/TestImage-1024x1024.png' />
                </div>

                <div className='button-nav'>
                    <button>Entrar</button>
                </div>
            </div>

            <div className='navegation'>
            <ul>
                        <li>
                            {location.pathname === '/home' ? (
                                <Link to="/home" className="active-link">Home</Link>
                            ) : (
                                <Link to="/home">Home</Link>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/products' ? (
                                <Link to="/products" className="active-link">Produtos</Link>
                            ) : (
                                <Link to="/products">Produtos</Link>
                            )}
                        </li>
                        <li>
                            {location.pathname === '/users' ? (
                                <Link to="/users" className="active-link">Cadastro de Usuários</Link>
                            ) : (
                                <Link to="/users">Cadastro de Usuários</Link>
                            )}
                        </li>
                        <li>Cadastro de vendas</li>
                    </ul>
            </div>
        </div>
        
        </>
    );
}

export default Navbar;