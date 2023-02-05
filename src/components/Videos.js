import { Link } from 'react-router-dom';
import classes from '../Styles/Videos.module.css';
import useVideoList from './Hooks/useVideoList';
import Video from './Video';

export default function Videos() {
	const { loading, error, videos } = useVideoList();

	return (
		<div className={classes.videos}>
			{videos.length > 0 &&
				videos.map((video) => (
					<Link to="/quiz" key={video.youtubeID}>
						<Video title={video.title} id={video.youtubeID} noq={video.noq} />
					</Link>
				))}

			{!loading && videos.length === 0 && (
				<span className="error">No Data Found!!</span>
			)}

			{error && <span className="error">There was an error!!</span>}

			{loading && <span>Loading...</span>}
		</div>
	);
}
