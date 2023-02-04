import { Link } from 'react-router-dom';
import Videos from '../Videos';

export default function Home() {
	return (
		<div>
			<Link to="/quiz">
				<Videos />
			</Link>
		</div>
	);
}
