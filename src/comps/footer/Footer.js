import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="container-fluid p-3 mt-5" style={{ background: '#ddd' }}>
                <div className="row text-success p-3">
                    <div className="col-4 footerLogo text-center">
                        <Link to={'/'} className="text-success text-decoration-none">
                            <Logo />
                        </Link>
                    </div>
                    <div className="col-6 text-start fs-5">
                        <p>
                            caters to a diverse range of clients and entities,
                            all seeking expert guidance and solutions in various
                            domains. Our services are tailored to meet the needs of:
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;