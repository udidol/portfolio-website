import ToggleSwitch from "./toggle-switch";

export default function Hero() {
	return (
		<div className="hero">
			<div id="particles-js"></div>
			<ToggleSwitch/>
			<div className="hero-content section">
				<div className="hero-title">
					Hi, I'm <span className="hero-emphasized"><span className="hero-curly-braces">{'{'}</span>Udi Dollberg<span className="hero-curly-braces">{'}'}</span></span>
				</div>
				<div className="hero-subtitle">
					I'm a <span className="hero-emphasized">full stack web developer.</span>
				</div>
				<div className="hero-social">
					<a href="https://github.com/udidol" target="_blank">GH</a>
					<span className="hero-separator">|</span>
					<a href="https://www.linkedin.com/in/udidollberg/" target="_blank">LI</a>
				</div>
			</div>
		</div>
	);
}