import React from "react";

function CustomRadioBtn({ onChangingValue, obj }) {
	let { btns, type, ...otherProps } = obj ?? {};
	let handleChange = (e) => {
		if (onChangingValue) {
			onChangingValue(e);
		}
	};
	let radioBtnList = btns?.map(({ label, value, id }, index) => {
		return (
			<React.Fragment key={index}>
				<input
					type={type ?? "radio"}
					value={value ?? label ?? ""}
					{...otherProps}
					id={id ?? label ?? "radio"}
					className="form_radio"
					onChange={handleChange}
				/>
				<label htmlFor={id ?? label ?? ""} className="form_radio-label">
					{label || ""}
				</label>
			</React.Fragment>
		);
	});

	return (
		<>
			<div className="entry m_top-sm">{radioBtnList}</div>
		</>
	);
}

export default CustomRadioBtn;
