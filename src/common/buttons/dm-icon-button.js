import PropTypes from 'prop-types';

/* eslint-disable react/jsx-props-no-spreading */
const DmButtonIcon = ({
	title,
	label,
	handleButtonClick,
	classes,
	children,
	...rest
}) => (
	<button
		type="button"
		title={title}
		className={`btn btn-text d-flex align-items-center ${classes ? ` ${classes}` : ''}`}
		onClick={handleButtonClick}
		{...rest}
	>
		{children}
		{label}
	</button>
);

export default DmButtonIcon;

DmButtonIcon.propTypes = {
	title: PropTypes.string,
	label: PropTypes.string,
	handleButtonClick: PropTypes.func,
	classes: PropTypes.string,
	children: PropTypes.node.isRequired,
};

DmButtonIcon.defaultProps = {
	handleButtonClick: () => {},
	title: '',
	label: '',
	classes: '',
};
