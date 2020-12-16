import React from "react";

function FormBtn({ type, ...otherProps }) {
	return (
		<React.Fragment>
			{type ? (
				<button className="form_btn" type={type} {...otherProps}>
					{type}
				</button>
			) : null}
		</React.Fragment>
	);
}

export default FormBtn;
