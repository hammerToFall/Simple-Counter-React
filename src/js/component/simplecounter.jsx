import PropTypes from "prop-types";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="clock col-2">
					<i className="fas fa-clock"></i>
				</div>
				<div className="col">{props.seconds6}</div>
				<div className="col">{props.seconds5}</div>
				<div className="col">{props.seconds4}</div>
				<div className="col">{props.seconds3}</div>
				<div className="col">{props.seconds2}</div>
				<div className="col">{props.seconds1}</div>
			</div>
		</div>
	);
};
SimpleCounter.propTypes = {
	seconds1: PropTypes.string,
	seconds2: PropTypes.string,
	seconds3: PropTypes.string,
	seconds4: PropTypes.string,
	seconds5: PropTypes.string,
	seconds6: PropTypes.string,
};
export default SimpleCounter;
