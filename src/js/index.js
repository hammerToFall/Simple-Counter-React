//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/simplecounter.jsx";

//render your react application
// ReactDOM.render(<SimpleCounter seconds={10} />, document.querySelector("#app"));
let second = 0;
window.setInterval(() => {
	const six = Math.floor(second / 100000) % 10;
	const five = Math.floor(second / 10000) % 10;
	const four = Math.floor(second / 1000) % 10;
	const three = Math.floor(second / 100) % 10;
	const two = Math.floor(second / 10) % 10;
	const one = Math.floor(second / 1) % 10;

	ReactDOM.render(
		<SimpleCounter
			seconds1={one}
			seconds2={two}
			seconds3={three}
			seconds4={four}
			seconds5={five}
			seconds6={six}
		/>,
		document.querySelector("#app")
	);
	second += 1;
}, 1000);
