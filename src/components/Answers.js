import classes from '../Styles/Answers.module.css';
import Checkbox from './Checkbox';

export default function Answers({ options = [], handleChange }) {
	return (
		<div className={classes.answers}>
			{options.map((option, index) => (
				<Checkbox
					className={classes.answer}
					text={option.title}
					value={index}
					checked={option.checked}
					key={index}
					onChange={(e) => handleChange(e, index)}
				/>
			))}
		</div>
	);
}
