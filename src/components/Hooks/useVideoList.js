import {
	get,
	getDatabase,
	limitToFirst,
	orderByKey,
	query,
	ref,
	startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideoList(page) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		async function fetchVideos() {
			const DB = getDatabase();
			const videosRef = ref(DB, 'videos');
			const videoQuery = query(
				videosRef,
				orderByKey(),
				startAt('' + page),
				limitToFirst(15),
			);

			try {
				setError(false);
				setLoading(true);

				//=> Request for Data to the Firebase:
				const snapshot = await get(videoQuery);
				setLoading(false);

				if (snapshot.exists()) {
					//=> Convert Sanpshot from Object to Array:

					setVideos((prevValue) => {
						return [...prevValue, ...Object.values(snapshot.val())];
					});
				} else {
					setHasMore(false);
				}

				//=>
			} catch (err) {
				console.log(err);

				setLoading(false);
				setError(true);
			}
		}

		fetchVideos();
	}, [page]);

	return {
		loading,
		error,
		videos,
		hasMore,
	};
}
