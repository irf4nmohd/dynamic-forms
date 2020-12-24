import React, { useState } from "react";

import Dropdown from "../Dropdown";
import TextFeild from "../TextFeild";
import CustomBtn from "../CustomBtn";
import CustomRadioBtn from "../CustomRadioBtn";

//importing form-json

import {
	textObj,
	emailObj,
	passwordObj,
	dropdownObj,
	radioObj,
} from "../formObjs";

const FormGroup = () => {
	//storing all the entered value
	const [feildEntry, setFeildEntry] = useState({});
	//setting state
	let onChangingValue = (event) => {
		setFeildEntry({ ...feildEntry, [event.target.name]: event.target.value });
	};
	//handling form submit & showing the entry in console
	let handleSubmit = (e) => {
		e.preventDefault();
		console.log(feildEntry);
		setFeildEntry({});
	};
	return (
		<form className="form_container" onSubmit={handleSubmit}>
			<TextFeild onChangingValue={onChangingValue} obj={textObj} />
			<TextFeild onChangingValue={onChangingValue} obj={emailObj} />
			<TextFeild onChangingValue={onChangingValue} obj={passwordObj} />
			<Dropdown onChangingValue={onChangingValue} obj={dropdownObj} />
			<CustomRadioBtn onChangingValue={onChangingValue} obj={radioObj} />
			<CustomBtn type="submit" />
		</form>
	);
};

export default FormGroup;
