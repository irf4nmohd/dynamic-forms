import React from "react";

function FormBtn({ type, ...otherProps }) {
	return (
		<button className="form_btn" type={`${type}`} {...otherProps}>
			{type}
		</button>
	);
}

export default FormBtn;
