import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuiz(videoID) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function fetchQuestions() {
			const DB = getDatabase();
			const quizRef = ref(DB, 'quiz/' + videoID + '/questions');
			const quizQuery = query(quizRef, orderByKey());

			try {
				setError(false);
				setLoading(true);

				const snapshot = await get(quizQuery);
				setLoading(false);

				if (snapshot.exists()) {
					setQuestions((prevValue) => {
						return [...prevValue, ...Object.values(snapshot.val())];
					});
				}
			} catch (err) {
				setLoading(false);
				setError(true);
				console.log(err);
			}
		}

		fetchQuestions();
	}, [videoID]);

	return {
		loading,
		error,
		questions,
	};
}
