import Script from 'next/script';

import ThemeProvider from '../context/context';

import Project from '../components/project';
import projectsData from '../projects.json';
import Hero from '../components/Hero';

export default function HomePage() {
    return (
		<ThemeProvider>
			<Script
				src="./ext-scripts/particles.min.js"
				onLoad={ () => {
					particlesJS.load( 'particles-js', './ext-scripts/particlesjs-config.json', function() {} );
				} }
			/>
			<Hero/>
			<div className="projects-section section">
				<h2 className="section-title">Dev Projects</h2>
				<div className="projects-container">
					{
					projectsData.map( ( project ) => {
						return <Project key={ project.title } { ...project } />
					} )
					}
				</div>
			</div>
		</ThemeProvider>
	);
}