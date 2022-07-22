import PropTypes from 'prop-types';

export default function ProjectStackItem( props ) {
	return (
		<div className="project-stack-item">
			<div className="project-stack-item-type">
				{ props.type + ':' }
			</div>
			<div className="project-stack-item-stack">
				{props.stack.join(", ")}
			</div>
		</div>
	);
}

ProjectStackItem.propTypes = {
	type: PropTypes.string.isRequired,
	stack: PropTypes.array.isRequired,
};