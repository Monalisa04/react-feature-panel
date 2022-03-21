import { useEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import { Collapse } from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import DmButtonIcon from "../common/buttons/dm-icon-button";
import DmNumberDropdown from "../common/dropdowns/dm-number-dropdown";
import DmToggle from "../common/toggle/dm-toggle";
import { CONFIG_TYPE_NUMBER } from "../constants/constants";

const Feature = ({
	/* this attribute "code" is currently not used
	but this would be the identifier against which
	the enabled/disabled configuration would be stored for a feature
	*/
	feature,
}) => {
	const [featureData, setFeatureData] = useState({
		code: '',
		label: '',
	});

	useEffect(() => {
		setFeatureData({
			...feature,
		});
	}, [feature]);

	const {
		code,
		label,
		value,
		defaultValue = false,
		features = [],
	} = featureData;

	const additionalConfigElem = useMemo(() => {
		const {
			additionalConfig = {},
		} = featureData;
		const {
			type,
			min,
			max,
			value: additionalConfigValue,
		} = additionalConfig;
		return type === CONFIG_TYPE_NUMBER ? (
			<DmNumberDropdown
				min={min}
				max={max}
				value={additionalConfigValue}
				handleDropdownChange={val => setFeatureData({
					...featureData,
					additionalConfig: {
						...additionalConfig,
						value: val,
					}
				})}
			/>
		) : null;
	}, [featureData]);
	return (
		<ul className="list-unstyled m-0 p-3 bg-black-lg">
			<li className="list-unstyled d-flex justify-content-between">
				{label.toUpperCase()}
				<div className="d-flex align-items-center">
					<div className="mx-3">
						{additionalConfigElem}
					</div>
					<DmToggle
						on={value !== undefined ? value : defaultValue}
						handleClick={() => {
							setFeatureData({
								...featureData,
								value: value !== undefined ? !value : !defaultValue,
								features: features.map(child => ({
									...child,
									value: value ? false : child.value,
								}))
							});
						}}
					/>
					{features.length > 0 && (
						<DmButtonIcon
						>
							{!value && <FaAngleDown className="text-white" />}
							{value && <FaAngleUp className="text-white" />}
						</DmButtonIcon>
					)}
				</div>
			</li>
			{features.length > 0 && (
				<Collapse in={value}>
					<div>
						{features.map((childFeature, index) => (
							<Feature
								key={index}
								feature={childFeature}
							/>
						))}
					</div>
				</Collapse>
			)}
		</ul>
	);
};

export default Feature;

Feature.propTypes = {
	feature: PropTypes.shape({
		code: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		value: PropTypes.bool,
		defaultValue: PropTypes.bool,
		features: PropTypes.arrayOf(PropTypes.shape({
			code: PropTypes.string,
			label: PropTypes.string,
			value: PropTypes.bool,
			defaultValue:  PropTypes.bool,
		})),
		additionalConfig: PropTypes.shape({
			type: PropTypes.oneOf([CONFIG_TYPE_NUMBER]),
			min: PropTypes.number,
			max: PropTypes.number,
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	}),
};

Feature.defaultProps = {
	feature: {
		code: '',
		label: '',
	}
};
