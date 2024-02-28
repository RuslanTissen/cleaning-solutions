import Header from './components/header/Header.jsx';
import Main from './main/Main.jsx';
import Footer from './components/footer/Footer';
import "./App.scss"

// const express = require("express")

function App() {
	return (
		<div className="App">

			<Header />

			<Main />

			<Footer />

		</div>
	);
}

export default App;


	{/* <Routes>
				<Route path='main'>
					<Route index element={<Main />} />
					<Route path='about' element={<About />} />
					<Route path='services' element={<Services />} />
				</Route>
			</Routes> */}
