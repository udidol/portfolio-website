import PropTypes from 'prop-types';

import ProjectStack from './project-stack.js';
import ProjectLinks from './project-links.js';

export default function Project( props ) {
	const { title, img, description, stack, links } = props;

	return (
		<div className="project">
			<div className="project-image project-column">
				<div className="project-image-overlay">
					<a href={ links.github } target="_blank">Check out the project's Github repo</a>
				</div>
				<img className="project-thumbnail" src={ img } alt={ `${ title } - project screenshot` } />
			</div>
			<div className="project-details project-column">
				<h3 className="project-title">{ title }</h3>
				<ProjectStack stack={ stack }/>
				<div className="project-description">
					{ description }
				</div>
				<ProjectLinks links={ links }/>
			</div>
		</div>
	);
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	stack: PropTypes.object.isRequired,
	links: PropTypes.object.isRequired,
	description: PropTypes.string.isRequired,
};