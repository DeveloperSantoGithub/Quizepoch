import classes from '../Styles/Button.module.css';

export default function Button({ children }) {
	return (
		<div className={classes.button}>
			<span>{children}</span>
		</div>
	);
}
