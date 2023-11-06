const Button = (props) => {
    const {title, className} = props
    return ( 
        <>
            <button type="button" className={`btn btn-success ${className}`}>{title}</button>
        </>
     );
}
 
export default Button;