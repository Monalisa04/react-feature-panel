import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DmNumberDropdown = ({
	min,
	max,
	selected,
	required = false,
	handleDropdownChange,
	classes,
	...rest
}) => {
	const [dropDownItems, setItems] = useState([]);
	const [selectedNumber, setSelectedNumber] = useState(null);

	const handleChange = e => {
		e.preventDefault();
		setSelectedNumber(e.target.value);

		if (typeof handleDropdownChange === 'function') {
			handleDropdownChange(e.target.value);
		}
	};

	useEffect(() => {
		const minNumber = parseInt(min);
		const maxNumber = parseInt(max);
		if (Number.isNaN(minNumber) || Number.isNaN(maxNumber)) {
			return;
		}
		const itemsCount = (maxNumber - minNumber) + 1;
		if (itemsCount > 0) {
			setItems( Array.apply(null, {length: maxNumber + 1}).map(Number.call, Number).slice(minNumber));
		}
	}, [min, max]);

	useEffect(() => {
		const selectedNumber = parseInt(selected);
		if (Number.isNaN(selectedNumber)) {
			setSelectedNumber(selectedNumber);
		}
	}, [selected]);

	return (
		<select
			{...(selectedNumber !== null ? { value: selectedNumber } : {})}
			className={`form-control-sm bg-black text-white${classes ? ` ${classes}` : ''}`}
			onChange={handleChange}
			required={required}
			/* eslint-disable react/jsx-props-no-spreading */
			/* prop spreading is required for reusable components to include any props passed */
			{...rest}
		>
			{dropDownItems.map(item => (
				<option
					key={item}
					value={item}
				>
					{item}
				</option>
			))}
		</select>
	);
};

export default DmNumberDropdown;

DmNumberDropdown.propTypes = {
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	selected: PropTypes.number,
	required: PropTypes.bool,
	handleDropdownChange: PropTypes.func,
};

DmNumberDropdown.defaultProps = {
	selected: null,
	required: false,
	handleDropdownChange: () => {},
};
