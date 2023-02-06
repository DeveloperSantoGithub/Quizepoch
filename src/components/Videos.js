import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

import useVideoList from './Hooks/useVideoList';
import Video from './Video';

export default function Videos() {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideoList(page);

	return (
		<div>
			{videos.length > 0 && (
				<InfiniteScroll
					dataLength={videos.length}
					hasMore={hasMore}
					next={() => setPage(page + 5)}
					loader={<span className="success">Loading...</span>}
				>
					{videos.map((video) =>
						video.noq > 0 ? (
							<Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
								<Video
									title={video.title}
									id={video.youtubeID}
									noq={video.noq}
								/>
							</Link>
						) : (
							<Link to="/no-quiz">
								<Video
									title={video.title}
									id={video.youtubeID}
									noq={video.noq}
									key={video.youtubeID}
								/>
							</Link>
						),
					)}
				</InfiniteScroll>
			)}

			{!loading && videos.length === 0 && (
				<span className="error">No Data Found!!</span>
			)}

			{error && <span className="error">There was an error!!</span>}

			{loading && <span>Loading...</span>}
		</div>
	);
}
