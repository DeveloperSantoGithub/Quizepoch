import { Link } from 'react-router-dom';
import logo from '../Assets/images/logo.png';
import classes from '../Styles/Navbar.module.css';
import Account from './Account';
export default function Navbar() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<Link to="/" className={classes.brand}>
						<img src={logo} alt="Quizepoch Logo" />
						<h3>Quizepoch</h3>
					</Link>
				</li>
			</ul>
			<Account />
		</nav>
	);
}
