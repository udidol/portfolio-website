import Head from 'next/head';
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
				{ 
					'production' === process.env.NODE_ENV ??
					( <>
						<Script strategy="afterInteractive" src={ `https://www.googletagmanager.com/gtag/js?id=G-${ process.env.NEXT_PUBLIC_ANALYTICS_ID }` } />
						<Script
							id='google-analytics'
							strategy="afterInteractive"
							dangerouslySetInnerHTML={{
								__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-${ process.env.NEXT_PUBLIC_ANALYTICS_ID }', {
									page_path: window.location.pathname,
								});
								`,
								}}
						/>
					</>
					)
				}
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