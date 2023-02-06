import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Styles/Global.css';
import { AuthProvider } from './Contexts/AuthContext';
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import QuizNotFound from './Pages/QuizNotFound';
import Result from './Pages/Result';
import Signup from './Pages/Signup';
import PrivateOutlet from './PrivateOutlet';
import PublicOutlet from './PublicOutlet';

function App() {
	return (
		<>
			<Router>
				<AuthProvider>
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />

							<Route path="/*" element={<PublicOutlet />}>
								<Route path="signup" element={<Signup />} />
								<Route path="login" element={<Login />} />
							</Route>

							<Route path="/*" element={<PrivateOutlet />}>
								<Route path="quiz/:id" element={<Quiz />} />
								<Route path="no-quiz" element={<QuizNotFound />} />
								<Route path="result/:id" element={<Result />} />
							</Route>
						</Routes>
					</Layout>
				</AuthProvider>
			</Router>
		</>
	);
}

export default App;
