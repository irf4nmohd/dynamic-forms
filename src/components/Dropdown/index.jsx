import React from "react";

function Dropdown({ name, options }) {
	let optionsJsx = options?.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});
	return (
		<div className="form_group">
			<select name={name} className="dropdown" required>
				<option value="" defaultValue>
					{name}
				</option>
				{optionsJsx}
			</select>
		</div>
	);
}

export default Dropdown;
