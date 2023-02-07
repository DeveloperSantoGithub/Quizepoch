import { useRef, useState } from 'react';
import img from '../Assets/images/3.jpg';
import classes from '../Styles/MiniPlayer.module.css';

export default function MiniPlayer() {
	const [status, setStatus] = useState(false);

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
				play_circle_filled
			</span>
			<span
				className={`material-icons-outlined ${classes.close}`}
				onClick={toggleMiniPlayer}
			>
				close
			</span>
			<img src={img} alt="Mini player" />
			<p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
		</div>
	);
}
