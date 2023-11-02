import { Link } from 'react-router-dom';
import './NotFound.css'


function NotFound() {
    return ( 
        <>
            <h1>404</h1>
            <h3>this page Not found</h3>
            <Link className='' to='/'> <button className='btn btn-primary'>Back to our page</button></Link>
        </>
     );
}

export default NotFound ;