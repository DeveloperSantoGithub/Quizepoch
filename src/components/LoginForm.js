import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../Styles/Login.module.css';
import Button from './Button';
import { useAuth } from './Contexts/AuthContext';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const { login } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
			await login(email, password);
			navigate('/');
		} catch (err) {
			console.log(err);

			switch (err.code) {
				case 'auth/wrong-password':
					setError('Wrong password!');
					break;
				case 'auth/user-not-found':
					setError('Wrong email address!');
					break;
				default:
					setError('Faild to signup!!');
					break;
			}
		}
	}

	return (
		<Form className={`${classes.login}`} onSubmit={handleSubmit}>
			<TextInput
				type="text"
				placeholder="Enter email"
				icon="alternate_email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>

			<TextInput
				type="password"
				placeholder="Enter password"
				icon="lock"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<Button disabled={loading} type="submit">
				<span>Submit now</span>
			</Button>

			{error && <span className="error">{error}</span>}

			<div className="info">
				Don't have an account? <Link to="../signup">Signup</Link> instead.
			</div>
		</Form>
	);
}
