import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://www.linkedin.com/in/mvivah/" target="_blank" rel="noreferrer">
					<FaLinkedinIn />
				</a>
			</div>
			<div>
				<a href="https://github.com/mvivah" target="_blank" rel="noreferrer">
					<BsGithub />
				</a>
			</div>
			<div>
				<a href="https://facebook.com/mvivah" target="_blank" rel="noreferrer">
					<FaFacebookF />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
