import PropTypes from 'prop-types';
import ProjectStackItem from "./project-stack-item";

export default function ProjectStack( { stack } ) {
	return (
		<div className="project-stack">
			{ stack.backend &&
				<ProjectStackItem type="Backend" stack={ stack.backend } /> }
			{ stack.frontend &&
				<ProjectStackItem type="Frontend" stack={ stack.frontend } /> }
		</div>
	)
}

ProjectStack.propTypes = {
	stack: PropTypes.object.isRequired,
};