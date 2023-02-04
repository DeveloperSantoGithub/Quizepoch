import { Link } from 'react-router-dom';
import classes from '../Styles/Account.module.css';
import { useAuth } from './Contexts/AuthContext';

export default function Account() {
	const { currentUser, logout } = useAuth();

	return (
		<div className={classes.account}>
			{currentUser ? (
				<>
					<span className="material-icons-outlined" title="Account">
						account_circle
					</span>
					<span
						style={{
							textTransform: 'uppercase',
							color: '#9162ee',
							fontSize: '.8rem',
							fontWeight: '600',
						}}
					>
						{currentUser.displayName}
					</span>
					<span
						className="material-icons-outlined"
						title="Logout"
						onClick={logout}
					>
						logout
					</span>
				</>
			) : (
				<>
					<Link to="/signup" className={classes.accountText}>
						Signup
					</Link>
					<Link to="/login" className={classes.accountText}>
						Login
					</Link>
				</>
			)}
		</div>
	);
}
