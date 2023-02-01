import classes from '../../Styles/Answers.module.css';
import Checkbox from '../Checkbox';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

export default function Quiz() {
	return (
		<>
			<h1>Pick three of your favorite Star Wars Flims</h1>
			<h4>Question can have multiple answers</h4>

			<div className={classes.answers}>
				<Checkbox className={classes.answer} text="Test Answer Options" />
				<Checkbox className={classes.answer} text="Test Answer Options" />
				<Checkbox className={classes.answer} text="Test Answer Options" />
				<Checkbox className={classes.answer} text="Test Answer Options" />

				<ProgressBar />

				<MiniPlayer />
			</div>
		</>
	);
}
