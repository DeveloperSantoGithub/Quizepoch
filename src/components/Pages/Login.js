import loginImage from '../../Assets/images/login.svg';
import classes from '../../Styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

export default function Login() {
	return (
		<>
			<h1>Login to your account</h1>
			<div class="column">
				<Illustration img={loginImage} alt="login image" />

				<Form className={`${classes.login}`}>
					<TextInput
						type="text"
						placeholder="Enter email"
						icon="alternate_email"
					/>

					<TextInput type="password" placeholder="Enter password" icon="lock" />

					<Button> Submit now </Button>

					<div class="info">
						Don't have an account? <a href="signup.html">Signup</a> instead.
					</div>
				</Form>
			</div>
		</>
	);
}
