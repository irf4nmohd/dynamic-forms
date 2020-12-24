import React, { useState } from "react";

function Dropdown({ obj, onChangingValue }) {
	/*using state for showing error msg if the user blured it with default value*/
	let [errorState, setErrorState] = useState({
		errorStatus: false,
		errorMsg: "",
	});
	/*null check if obj is not defined*/
	let { name, options, ...remainingProps } = obj ?? {};
	/*mapping array list to render dropdown options*/
	let optionsList = options?.map((item, index) => {
		return (
			<option name={name ?? "option"} value={item ?? ""} key={index}>
				{item ?? "--not defined --"}
			</option>
		);
	});
	/* this event is to handle dropdown changing value */
	let handleChange = (e) => {
		let { value } = e.target;
		if (onChangingValue) {
			if (value === "" || value === undefined || value === "") {
				return setErrorState({ errorStatus: true, errorMsg: "feild is empty" });
			}
			onChangingValue(e);
		}
	};
	/*for resetting state */
	let handleFocus = (e) => {
		let { value } = e.target;
		if (value !== "" || value !== null) {
			return setErrorState({
				errorStatus: false,
				errorMsg: "",
			});
		}
	};
	/*setting state with error if*/
	let handleBlur = (e) => {
		let { value } = e.target;
		if (value === "" || value === undefined || value === null) {
			return setErrorState({
				errorStatus: true,
				errorMsg: `${name ?? "this"} feild is empty`,
			});
		}
	};

	return (
		<div className="entry">
			<select
				name={name ?? "option"}
				className="dropdown"
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleChange}
				{...remainingProps}
			>
				<option value="" defaultValue>
					{name ?? "option"}
				</option>
				{optionsList}
			</select>
			<div className="msg-container">
				{errorState.errorStatus ? errorState.errorMsg : null}
			</div>
		</div>
	);
}

export default Dropdown;
