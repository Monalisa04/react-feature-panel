
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DmToggle = ({
	on,
	handleClick,
	classes,
	testId = "",
}) => {
	const toggleClasses = classNames(
		'toggle',
		classes,
		{ 'toggle-on': on },
	);
	return (
		<div
			className={toggleClasses}
			onClick={handleClick}
			role="presentation"
			data-testid={testId}
		>
			<div className="toggle-dot" />
		</div>
	);
};

export default DmToggle;

DmToggle.propTypes = {
	on: PropTypes.bool.isRequired,
	handleClick: PropTypes.func.isRequired,
	classes: PropTypes.string,
};

DmToggle.defaultProps = {
	classes: undefined,
};
