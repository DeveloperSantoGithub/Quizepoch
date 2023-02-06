import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useAnswers(videoID) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		async function fetchAnswers() {
			const DB = getDatabase();
			const answerRef = ref(DB, 'answers/' + videoID + '/questions');
			const answerQuery = query(answerRef, orderByKey());

			try {
				setError(false);
				setLoading(true);

				const snapshot = await get(answerQuery);
				setLoading(false);

				if (snapshot.exists()) {
					setAnswers((prevValue) => {
						return [...prevValue, ...Object.values(snapshot.val())];
					});
				}
			} catch (err) {
				setLoading(false);
				setError(true);
				console.log(err);
			}
		}

		fetchAnswers();
	}, [videoID]);

	return {
		loading,
		error,
		answers,
	};
}
