import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';
export default function MainNavigation(){
    return (
        <div>
      <nav className={classes.navbar}>
        <div className={classes.navContainer}>
          <div className={classes.logo}>
            <a href="#">Logo</a>
          </div>
          <ul className={classes.navLinks}>
            <Link to="/" className={classes.link}>Home</Link>
            <Link to="/" className={classes.link}>Books</Link>
          </ul>
        </div>
      </nav>
    </div>
    )
}