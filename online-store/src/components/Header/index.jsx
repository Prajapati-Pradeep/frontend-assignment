import { Link } from "react-router-dom"
import styles from './styles.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'} >
                <h2 className="m-0 pt-4 pb-4 text-center" >Online Sore</h2>
            </Link>
            <Link to={'/search'} className={styles.search}>  Search</Link>
        </div>
    )
}

export default Header