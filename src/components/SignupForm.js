import { Link } from 'react-router-dom';
import classes from '../Styles/Signup.module.css';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
	return (
		<Form className={`${classes.signup}`}>
			<TextInput type="text" placeholder="Enter name" icon="person" />

			<TextInput type="text" placeholder="Enter eamil" icon="alternate_email" />

			<TextInput type="password" placeholder="Enter password" icon="lock" />

			<TextInput
				type="password"
				placeholder="Confirm password"
				icon="lock_clock"
			/>

			<TextInput type="text" placeholder="Enter name" icon="person" />

			<Checkbox text="I agree to the Terms &amp; Conditions" />

			<Button>
				<span>Submit now</span>
			</Button>

			<div class="info">
				Already have an account? <Link to="../login">Login</Link> instead.
			</div>
		</Form>
	);
}
