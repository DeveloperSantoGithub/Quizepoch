import '../Styles/Global.css';
import Layout from './Layout';
import Login from './Pages/Login';
// import Home from './Pages/Home';
// import Signup from './Pages/Signup';

function App() {
	return (
		<>
			<Layout>
				{/* <Home /> */}
				{/* <Signup /> */}
				<Login />
			</Layout>
		</>
	);
}

export default App;
