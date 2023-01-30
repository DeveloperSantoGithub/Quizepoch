import classes from '../Styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className={classes.main}>
				<div className={classes.container}>{children}</div>
			</main>
		</>
	);
}
