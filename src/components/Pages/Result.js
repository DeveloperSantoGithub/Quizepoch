import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../Analysis';
import useAnswers from '../Hooks/useAnswers';
import Summary from '../Summary';

export default function Result() {
	const { state } = useLocation();
	const { qna } = state;
	const { id } = useParams();

	const { loading, error, answers } = useAnswers(id);
	console.log(answers);

	return (
		<>
			{loading && <span className="success">Loading...</span>}
			{error && <span className="error">There was an error!</span>}
			<>
				<Summary />
				<Analysis />
			</>
		</>
	);
}
