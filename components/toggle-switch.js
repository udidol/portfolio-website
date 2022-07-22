import ToggleSwitchCSS from '/css/toggle-switch.module.scss';

import { useState } from 'react';

const toggleParticleColors = ( darkMode ) => {
	const color = darkMode ? '#dfdfdf' : '#092b6a';

	pJSDom[0].pJS.particles.array.forEach( ( el, i ) => {
		pJSDom[0].pJS.particles.array[ i ].color.value = color;
		pJSDom[0].pJS.particles.array[ i ].color.rgb = hexToRgb( color );
		pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb( color );
	});
}

export default function ToggleSwitch() {
	//const context = useContext(ThemeContext);
	const [ darkMode, setDarkMode ] = useState( false );
	const darkModeClass = 'dark';

	const handleClick = () => {
		setDarkMode( ! darkMode );

		document.querySelector('body').classList.toggle( darkModeClass );

		toggleParticleColors( ! darkMode );
	};

	return (
		<div className={ToggleSwitchCSS['toggle-switch-container']}>
			<div className={ToggleSwitchCSS['toggle-switch']}>
				<label className={ToggleSwitchCSS['toggle-switch-label']}>
					<input
						className={ToggleSwitchCSS['toggle-switch-input']}
						type="checkbox"
						checked={ ! darkMode }
    					onChange={handleClick}
					/>
					<span className={ToggleSwitchCSS['toggle-switch-slider']}></span>
					<span className={ToggleSwitchCSS['toggle-switch-caption']}>
						{ ( darkMode ? 'Dark' : 'Light' ) + ' Mode' }
					</span>
				</label>
			</div>
		</div>
	);
}