import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import classes from '../Styles/MiniPlayer.module.css';

export default function MiniPlayer({ id }) {
	const [status, setStatus] = useState(false);
	const videoUrl = `https://www.youtube.com/watch?v=${id}`;

	const buttonRef = useRef();

	function toggleMiniPlayer() {
		if (!status) {
			buttonRef.current.classList.remove(classes.floatingBtn);
			setStatus(true);
		} else {
			buttonRef.current.classList.add(classes.floatingBtn);
			setStatus(false);
		}
	}

	return (
		<div
			className={`${classes.miniPlayer} ${classes.floatingBtn}`}
			ref={buttonRef}
		>
			<span
				className={`material-icons-outlined ${classes.open}`}
				onClick={toggleMiniPlayer}
			>
				{' '}
				play_circle_filled{' '}
			</span>
			<span
				className={`material-icons-outlined ${classes.close}`}
				onClick={toggleMiniPlayer}
			>
				{' '}
				close{' '}
			</span>

			<ReactPlayer
				className={classes.player}
				url={videoUrl}
				width="300px"
				height="168px"
				playing={status}
				controls
			/>
			<p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
		</div>
	);
}
