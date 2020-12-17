import React, { useState, useEffect } from "react";

function FormRadio({ btns, type, ...otherProps }) {
	let [selectedButton, setSelectedButton] = useState("");

	useEffect(() => {
		console.log(selectedButton);
	}, [selectedButton]);

	let radioBtnRender = btns?.map(({ label, value }, index) => {
		return (
			<React.Fragment key={index}>
				<input
					type={type || "radio"}
					value={value || label || ""}
					{...otherProps}
					id={label || ""}
					className="form_radio"
					onChange={(e) => setSelectedButton(e.target.value)}
				/>
				<label htmlFor={label || ""} className="form_radio-label">
					{label || ""}
				</label>
			</React.Fragment>
		);
	});

	return (
		<>
			<div className="form_group">{radioBtnRender}</div>
		</>
	);
}

export default FormRadio;
