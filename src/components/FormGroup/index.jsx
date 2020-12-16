import React from "react";

import Dropdown from "../Dropdown";
import FormInput from "../FormInput";
import FormBtn from "../FormBtn";
import FormRadio from "../FormRadio";

//import form-json

import {
	formObj,
	formEmailObj,
	formPasswordObj,
	radioObj,
	dropdownObj,
} from "../formObjs";

const FormGroup = () => {
	// const [feildEntry, setFeildEntry] = useState({});
	// const change = (value) => {
	// 	console.log(value);
	// };
	// console.log(feildEntry);
	return (
		<div className="form_container">
			<form className="form">
				<FormInput {...formObj} />
				<FormInput {...formEmailObj} />
				<FormInput {...formPasswordObj} />
				<Dropdown {...dropdownObj} />
				<FormRadio {...radioObj} label="male" />
				<FormRadio {...radioObj} label="female" />
				<FormBtn type="submit" />
				<FormBtn type="reset" />
			</form>
		</div>
	);
};

export default FormGroup;
