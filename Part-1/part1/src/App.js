// import logo from "./logo.svg";
// import "./App.css";

// function App() {
// 	console.log("Hello from component");
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;

const App = () => {
	const now = new Date();
	const a = 10;
	const b = 20;
	console.log(now, a + b); // Date Wed Jun 14 2023 22:35:48 GMT+1000 (Australian Eastern Standard Time)

	return (
		<div>
			<p>Hello world, it is {now.toString()}</p>
			<p>
				{a} plus {b} is {a + b}
			</p>
		</div>
	);
};

// return React.createElement(
//   'div',
//   null,
//   React.createElement(
//     'p', null, 'Hello world, it is ', now.toString()
//   ),
//   React.createElement(
//     'p', null, a, ' plus ', b, ' is ', a + b
//   )
// )

export default App;
