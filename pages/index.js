import Head from 'next/head'
import Script from 'next/script';

import Project from '../components/project';
import projectsData from '../projects.json';
import Hero from '../components/Hero';

export default function HomePage() {
    return (
		<>
			<Head>
				<title>Udi Dollberg - Full Stack Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
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
		</>
	);
}