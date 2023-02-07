import { useMemo } from 'react';
import successImage from '../Assets/images/success.png';
import classes from '../Styles/Summary.module.css';
import useFetch from './Hooks/useFetch';

export default function Summary({ score, noq }) {
	let totalNumber = noq * 5;

	const getKeyword = useMemo(() => {
		if ((score / totalNumber) * 100 < 50) {
			return 'failed';
		} else if ((score / totalNumber) * 100 < 75) {
			return 'good';
		} else if ((score / totalNumber) * 100 < 100) {
			return 'very good';
		} else {
			return 'excellent';
		}
	}, [score, totalNumber]);

	const url = `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`;

	const { loading, error, result } = useFetch(url, 'GET', {
		Authorization: process.env.REACT_APP_PEXELS_API_KEY,
	});

	const image = result ? result.photos[0].src.medium : successImage;

	return (
		<div className={classes.summary}>
			<div className={classes.point}>
				<p className={classes.score}>
					Your score is <br />
					{score} out of {totalNumber}
					<br />
					<br />
					{getKeyword === 'failed' ? (
						<div style={{ color: 'red' }}>
							Failed!
							<br />
							Don't Give Up Try Again
						</div>
					) : getKeyword === 'good' ? (
						<div style={{ color: 'orange' }}>
							Pretty Good!
							<br /> Need More Study
						</div>
					) : (
						<div style={{ color: 'green' }}>
							Well Done! <br /> Keep it up
						</div>
					)}
				</p>
			</div>

			{loading && <div className={classes.badge}>Loading your badge...</div>}

			{error && <div className={classes.badge}>An error occured!</div>}

			{!loading && !error && (
				<div className={classes.badge}>
					<img src={image} alt="Success" style={{ borderRadius: '50px' }} />
				</div>
			)}
		</div>
	);
}
