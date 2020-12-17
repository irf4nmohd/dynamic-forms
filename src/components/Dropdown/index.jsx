import React, { useState, useEffect } from "react";

function Dropdown({ name, options }) {
	let [selectedOption, setSelectedOption] = useState("");

	useEffect(() => {
		console.log(selectedOption);
	}, [selectedOption]);

	let optionsJsx = options?.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});
	return (
		<div className="form_group">
			<select
				name={name}
				className="dropdown"
				onChange={(e) => setSelectedOption(e.target.value)}
				required
			>
				<option value="" defaultValue>
					{name}
				</option>
				{optionsJsx}
			</select>
		</div>
	);
}

export default Dropdown;
