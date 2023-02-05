import classes from '../Styles/Video.module.css';

export default function Video({ title, id, noq }) {
	const ytThumbnails = `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;

	return (
		<>
			<div className={classes.video}>
				<img src={ytThumbnails} alt={title} />
				<p>{title}</p>
				<div className={classes.qmeta}>
					<p>{noq} Questions</p>
					<p>Total points: {noq * 5}</p>
				</div>
			</div>
		</>
	);
}
