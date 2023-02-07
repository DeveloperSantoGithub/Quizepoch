import { useEffect, useState } from 'react';

export default function useFetch(url, method, headers) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [result, setResult] = useState(null);

	useEffect(() => {
		async function requestFetch() {
			try {
				setLoading(true);
				setError(false);
				//=> Fetch Data:
				const response = await fetch(url, {
					method: method || 'GET',
					headers: headers,
				});

				//=> Convert Data into JSON Format:
				const data = await response.json();
				setLoading(false);
				console.log(data);
				setResult(data);
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}
		requestFetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		loading,
		error,
		result,
	};
}
