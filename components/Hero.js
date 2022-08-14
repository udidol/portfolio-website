import ToggleSwitch from "./toggle-switch";

export default function Hero() {
	return (
		<div className="hero">
			<ToggleSwitch/>
			<div className="hero-content section">
				<div className="hero-title">
					Hi, I'm <span className="hero-emphasized">{'{'}Udi Dollberg{'}'}</span>
				</div>
				<div className="hero-subtitle">
					I'm a full stack web developer.
				</div>
				<div className="hero-social">
					<a href="https://www.linkedin.com/in/udidollberg/" target="_blank">LI</a>
					<span className="hero-separator">|</span>
					<a href="https://github.com/udidol" target="_blank">GH</a>
				</div>
			</div>
		</div>
	);
}