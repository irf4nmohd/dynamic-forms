import React from "react";

function CustomBtn({ type, ...otherProps }) {
	return (
		<section className="entry">
			{type ? (
				<button className="form_btn m_top-sm" type={type} {...otherProps}>
					{type}
				</button>
			) : null}
		</section>
	);
}

export default CustomBtn;
