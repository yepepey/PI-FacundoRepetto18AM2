
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css"
import Randomize from "../Randomize/Randomize.jsx";

const {div, link} = styles

export default function Nav({ onSearch }) {
    /* const handleClick = () => {
        useEffect(setAccess(false))
    } */

    return (
        <div className={div}>
            <Link className={link} to='/home'>Home</Link>
            <Link className={link} to='/about'>About</Link>
            <Link className={link} to='/favorites'>Favorites</Link>
            <SearchBar onSearch={onSearch} />
            <Randomize onSearch={onSearch} />
            {/*<Link className={link} to='/' onClick={handleClick}>Log Out</Link> */}
        </div>
    );
}