import classes from '../Styles/Button.module.css';

export default function Button({ className, children }) {
	return (
		<button className={`${classes.button}  ${className}`}>{children}</button>
	);
}
