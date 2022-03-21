import Feature from "./feature";
import PropTypes from 'prop-types';

const Features = ({
	features
}) => {
	return features.map((feature, index) => (
		<div className={index > 0 ? 'border-top': ''} key={index}>
			<Feature
				feature={feature}
			/>
		</div>
	))
};

export default Features;

Features.propTypes = {
	features: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		label: PropTypes.string,
		value: PropTypes.bool,
		defaultValue: PropTypes.bool,
	})),
};

Features.defaultProps = {
	features: [],
};
