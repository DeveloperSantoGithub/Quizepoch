import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../Styles/Signup.module.css';
import Button from './Button';
import Checkbox from './Checkbox';
import { useAuth } from './Contexts/AuthContext';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
	//=>Inputs States:
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [agree, setAgree] = useState();

	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const { signup } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		//=> Do Validation:
		if (password !== confirmPassword) {
			return setError("The password doesn't match!");
		}

		try {
			setError('');
			setLoading(true);
			await signup(email, password, username);
			navigate('/');
		} catch (err) {
			setLoading(false);
			console.log(err);

			switch (err.code) {
				case 'auth/weak-password':
					setError('Password should be at least 6 characters');
					break;
				case 'auth/invalid-email':
					setError('Invalid Email');
					break;
				case 'auth/email-already-in-use':
					setError('The email address is already in use');
					break;
				case 'auth/operation-not-allowed':
					setError('Operation not allowed');
					break;
				default:
					setError('Faild to signup!!');
					break;
			}
		}
	}

	return (
		<Form className={`${classes.signup}`} onSubmit={handleSubmit}>
			<TextInput
				type="text"
				required
				placeholder="Enter name"
				icon="person"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>

			<TextInput
				type="text"
				required
				placeholder="Enter email"
				icon="alternate_email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>

			<TextInput
				type="password"
				required
				placeholder="Enter password"
				icon="lock"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<TextInput
				type="password"
				required
				placeholder="Confirm password"
				icon="lock_clock"
				value={confirmPassword}
				onChange={(e) => {
					setConfirmPassword(e.target.value);
				}}
			/>

			<Checkbox
				text="I agree to the Terms &amp; Conditions"
				required
				value={agree}
				onChange={(e) => {
					setAgree(e.target.value);
				}}
			/>

			<Button disabled={loading} type="submit">
				<span>Submit now</span>
			</Button>

			{error && <p className="error">{error}</p>}

			<div className="info">
				Already have an account? <Link to="../login">Login</Link> instead.
			</div>
		</Form>
	);
}
