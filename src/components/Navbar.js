import logo from '../Assets/images/logo-bg.png';
import classes from '../Styles/Navbar.module.css';
import Account from './Account';
export default function Navbar() {
	return (
		<nav className={classes.nav}>
			<ul>
				<li>
					<a href="index.html" className={classes.brand}>
						<img src={logo} alt="Quizepoch Logo" />
						<h3>Quizepoch</h3>
					</a>
				</li>
			</ul>
			<Account />
		</nav>
	);
}
