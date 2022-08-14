import Head from 'next/head'

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
			<Hero/>
			<div className="projects-section section">
				<h2 className="section-title">DEV PROJECTS</h2>
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