import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function ProjectLinks( { links } ) {
	const labelsMap = {
		github: 'GitHub repo',
		download: 'Download',
		demo: 'Demo',
	};

	return (
		<div className="project-links">
			{
			Object.entries( links )
				.map( ( [ key, value ], index ) => {
					const label = labelsMap[ key ] || key;
					const link = value;
					const Separator = () => <span>•</span>;

					return (
						<Fragment key={ key }>
							<a href={ link } target="_blank" rel="noopener noreferrer">
								{ label }
							</a>
							{ index === Object.keys( links ).length - 1 ? '' : <Separator/> }
						</Fragment>
					);
				} )
			}
		</div>
	);
}

ProjectLinks.propTypes = {
	links: PropTypes.object.isRequired,
};