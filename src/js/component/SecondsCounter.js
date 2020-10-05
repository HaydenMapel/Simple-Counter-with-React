import React, { useState, useEffect } from "react";

export function SecondsCounter() {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		let interval = null;
		interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	const digitOne = seconds % 10;
	const digitTwo = Math.floor(seconds / 10) % 10;
	const digitThree = Math.floor(seconds / 100) % 10;
	const digitFour = Math.floor(seconds / 1000) % 10;
	const digitFive = Math.floor(seconds / 10000) % 10;
	const digitSix = Math.floor(seconds / 100000) % 10;
	return (
		<div>
			<div className="container text-center pb-2" id="counterdiv">
				<div className="badge badge-dark mx-1">
					<i className="far fa-clock" />
				</div>
				<div className="badge badge-dark mx-1">{digitSix}</div>
				<div className="badge badge-dark mx-1">{digitFive}</div>
				<div className="badge badge-dark mx-1">{digitFour}</div>
				<div className="badge badge-dark mx-1">{digitThree}</div>
				<div className="badge badge-dark mx-1">{digitTwo}</div>
				<div className="badge badge-dark mx-1">{digitOne}</div>
			</div>
		</div>
	);
}
