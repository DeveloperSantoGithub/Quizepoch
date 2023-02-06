import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../Analysis';
import useAnswers from '../Hooks/useAnswers';
import Summary from '../Summary';

export default function Result() {
	const { state } = useLocation();
	const { qna } = state;
	const { id } = useParams();

	const { loading, error, answers } = useAnswers(id);
	console.log(answers);

	function scoreCalculate() {
		let score = 0;

		answers.forEach((question, questionIndex) => {
			let correctIndexes = [],
				checkedIndexes = [];

			question.options.forEach((option, optionIndex) => {
				if (option.correct) correctIndexes.push(optionIndex);
				if (qna[questionIndex].options[optionIndex].checked) {
					checkedIndexes.push(optionIndex);
					option.checked = true;
				}
			});

			if (_.isEqual(correctIndexes, checkedIndexes)) {
				score = score + 5;
			}
		});

		return score;
	}

	const userScore = scoreCalculate();

	return (
		<>
			{loading && <span className="success">Loading...</span>}
			{error && <span className="error">There was an error!</span>}

			{answers && answers.length > 0 && (
				<>
					<Summary score={userScore} noq={answers.length} />
					<Analysis answers={answers} />
				</>
			)}
		</>
	);
}
