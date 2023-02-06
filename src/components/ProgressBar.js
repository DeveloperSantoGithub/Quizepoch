import classes from '../Styles/ProgressBar.module.css';
import Button from './Button';

export default function ProgressBar({ next, prev, submitQuiz, progress }) {
	return (
		<>
			<div className={classes.progressBar}>
				<div className={classes.backButton} onClick={prev}>
					<span className="material-icons-outlined"> arrow_back </span>
				</div>
				<div className={classes.rangeArea}>
					<div className={classes.tooltip}>{progress}% Cimplete!</div>
					<div className={classes.rangeBody}>
						<div
							className={classes.progress}
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>

				<Button
					className={classes.next}
					onClick={progress === 100 ? submitQuiz : next}
				>
					<span>{progress === 100 ? 'Submit Quiz' : 'Next Question'}</span>
					<span className="material-icons-outlined"> arrow_forward </span>
				</Button>
			</div>
		</>
	);
}
