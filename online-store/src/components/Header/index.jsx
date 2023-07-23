import { Link } from "react-router-dom"
const Header = () => {
    return (
        <Link to='/' style={{color:'inherit'}}>
            <h2 className="m-0 pt-4 pb-4 text-center" style={{backgroundColor:'#EF694C'}}>Online Sore</h2>
        </Link>
    )
}

export default Header