import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

import { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import useQuiz from '../Hooks/useQuiz';

const initialState = null;

const reducer = (state, action) => {
	switch (action.type) {
		case 'questions':
			action.value.questions.forEach((question) => {
				question.options.forEach((option) => {
					option.checked = false;
				});
			});
			return action.value;
		default:
			return state;
	}
};

export default function Quiz() {
	const { id } = useParams();
	const { loading, error, questions } = useQuiz(id);
	const [currentQuestions, setCurrentQuestions] = useState(0);

	const [qna, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h1>Pick three of your favorite Star Wars Flims</h1>
			<h4>Question can have multiple answers</h4>

			<Answers />
			<ProgressBar />
			<MiniPlayer />
		</>
	);
}
