import ToggleSwitchCSS from '/css/toggle-switch.module.scss';

import { useState } from 'react';

export default function ToggleSwitch() {
	const [ darkMode, setDarkMode ] = useState( false );
	const darkModeClass = 'dark';

	const handleClick = () => {
		setDarkMode( ! darkMode );

		document.querySelector('body').classList.toggle( darkModeClass );
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