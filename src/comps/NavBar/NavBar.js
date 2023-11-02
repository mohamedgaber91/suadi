import { Link } from 'react-router-dom';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import logo from '../../imgs/Logo.svg';
import { backToTop } from '../../App';
import { useDispatch } from 'react-redux';
import { setDark } from '../../rtk/slices/darkMode';


function NavBar() {
    const dispatch = useDispatch();
    const [mode, setMode] = useState(false);
    const modeSelect = () => {
        setMode(mode => !mode)
    }

    let activeMode = mode
        ? <FontAwesomeIcon icon="fa-solid fa-sun" style={{ color: '#000' }} className='me-3 fa-sun' onClick={() => { dispatch(setDark()); modeSelect() }} />
        : <FontAwesomeIcon icon="fa-regular fa-sun" style={{ color: '#fff' }} className='me-3 fa-sun' onClick={() => { dispatch(setDark()); modeSelect() }} />
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-success followNav">
            <div className="container-fluid ms-5 contNav">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt='logo' style={{ width: '53%', height: '53%' }} />
                </Link>
                <button className="navbar-toggler listToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto ">
                        <Link className="nav-link active" aria-current="page" to="/" onClick={() => backToTop()}>Home</Link>
                        <Link className="nav-link" to="/services" onClick={() => backToTop()}>services</Link>
                        <Link className="nav-link" to="/about" onClick={() => backToTop()}>About Us</Link>
                    </div>
                    <div className="navbar-nav me-5 align-items-center ms-5 logMode">
                        {activeMode}
                        <Link className="nav-link ps-1 loginCont" to="/signIn">
                            <FontAwesomeIcon icon="fa-regular fa-user" className='userIcon' />
                            <button className='btn text-white ps-3'> Log In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;