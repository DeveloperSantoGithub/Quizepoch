import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useVideoList() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchVideos() {
			const DB = getDatabase();
			const videosRef = ref(DB, 'videos');
			const videoQuery = query(videosRef, orderByKey());

			try {
				setError(false);
				setLoading(true);

				//=> Request for Data to the Firebase:
				const snapshot = await get(videoQuery);
				setLoading(false);

				if (snapshot.exists()) {
					//=> Convert Sanpshot from Object to Array:
					setVideos((prevVideos) => {
						return [...prevVideos, ...Object.values(snapshot.val())];
					});
				} else {
					//
				}

				//=>
			} catch (err) {
				console.log(err);

				setLoading(false);
				setError(true);
			}
		}

		fetchVideos();
	}, []);
}
