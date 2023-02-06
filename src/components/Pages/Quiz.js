import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import useQuiz from '../Hooks/useQuiz';

const initialState = null;

const reducer = (state, action) => {
	switch (action.type) {
		case 'questions':
			action.value.forEach((question) => {
				question.options.forEach((option) => {
					option.checked = false;
				});
			});
			return action.value;
		case 'answer':
			const copiedQuestions = _.cloneDeep(state);

			copiedQuestions[action.questionID].options[action.optionIndex].checked =
				action.value;

			return copiedQuestions;

		default:
			return state;
	}
};

export default function Quiz() {
	const { id } = useParams();
	const { loading, error, questions } = useQuiz(id);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [qna, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: 'questions',
			value: questions,
		});
	}, [questions]);

	function handleAnswerChange(e, index) {
		dispatch({
			type: 'answer',
			questionID: currentQuestion,
			optionIndex: index,
			value: e.target.checked,
		});
	}

	function nextQuestion() {
		if (currentQuestion <= questions.length) {
			setCurrentQuestion((preCurrentQusestion) => preCurrentQusestion + 1);
		}
	}

	return (
		<>
			{loading && <span className="success">Loading...</span>}
			{error && <span className="error">There was an error!</span>}

			{!loading && !error && qna && qna.length > 0 && (
				<>
					<h1>{qna[currentQuestion].title}</h1>
					<h4>Question can have multiple answers</h4>

					<Answers
						options={qna[currentQuestion].options}
						handleChange={handleAnswerChange}
					/>
					<ProgressBar />
					<MiniPlayer />
				</>
			)}
		</>
	);
}
