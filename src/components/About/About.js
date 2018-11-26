import React from 'react';

const about = (props) => {
	const style = {transform: "scale(-1, 1)"};

	return (
		<div className={"row"}>
			<div className={"col-md-6 text-center align-self-center"}>
				<img
					className={"rounded-circle my-2"}
					style={style}
					src="/assets/img/me.jpg"
					alt="Gabor Zay"/>
			</div>
			<div className={"col-md-6"}>
				<div className="card pb-0">
					<div className="card-body">
						<h5 className="card-title">Hello World!</h5>
						<p className={"card-text"}>I'm a <strong>PHP Full Stack Developer</strong> based in Vancouver with a
							background in Computing Science from Simon Fraser University.</p>
						<p className={"card-text"}>When I'm not writing code you can find me hiking the local
							mountains, riding around the seawall, or taking pictures around the city.</p>
						<p className={"card-text"}>Feel free to contact me on LinkedIn if you have any questions!</p>
						<div className={"d-flex justify-content-end"}>
								{props.children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;