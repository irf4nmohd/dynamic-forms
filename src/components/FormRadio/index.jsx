import React from "react";

function FormRadio({ label, type, ...otherProps }) {
	return (
		<div className="form_group">
			<input
				type={type || "radio"}
				{...otherProps}
				id={label}
				className="form_radio"
			/>
			<label htmlFor={label} className="form_radio-label">
				{label}
			</label>
		</div>
	);
}

export default FormRadio;
