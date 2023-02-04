/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../Styles/Signup.module.css';
import Button from './Button';
import Checkbox from './Checkbox';
import { useAuth } from './Contexts/AuthContext';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
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

		//=> validition:
		if (password !== confirmPassword) {
			return setError(`Password don't match!`);
		}

		try {
			setError('');
			setLoading(true);
			await signup(email, password, username);
			navigate('/');
		} catch (err) {
			// console.log(err);
			setLoading(false);

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

			<Button type="submit">
				<span>Submit now</span>
			</Button>

			{error && <p className="error">{error}</p>}

			<div class="info">
				Already have an account? <Link to="../login">Login</Link> instead.
			</div>
		</Form>
	);
}
