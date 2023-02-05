import { Link } from 'react-router-dom';
import Button from '../Button';

export default function QuizNotFound() {
	return (
		<div className="quizNotFound">
			<h3 className="quizNotFoundText">
				Sorry!! No quiz is available today on this video.
			</h3>

			<Link to="/">
				<Button>Back</Button>
			</Link>
		</div>
	);
}
