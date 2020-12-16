import React from "react";
import FormInput from "../FormInput";
import FormBtn from "../FormBtn";
import FormRadio from "../FormRadio";

//import form jsonmmm

import {
	formObj,
	formEmailObj,
	formPasswordObj,
	radioObj,
	dropdownObj,
} from "../formObjs";
import Dropdown from "../Dropdown";

const FormGroup = () => {
	// const [feildEntry, setFeildEntry] = useState({});
	// const change = (value) => {
	// 	console.log(value);
	// };
	// console.log(feildEntry);
	const toolTipEmail = {
		content: "user email",
		position: "top",
	};
	const toolTipPassword = {
		content: "user Password",
		position: "left",
	};
	const toolTipName = {
		content: "user name",
		position: "right",
	};
	return (
		<div className="form_container">
			<form className="form">
				<FormInput toolTip={toolTipName} {...formObj} />
				<FormInput toolTip={toolTipEmail} {...formEmailObj} />
				<FormInput toolTip={toolTipPassword} {...formPasswordObj} />
				{/* <div className="form_group">
					<select name="Qualification" className="dropdown" required>
						<option value="" defaultValue>
							Qualification
						</option>
						<option value="B.Tech">B.Tech</option>
						<option value="M.Tech">M.Tech</option>
					</select>
				</div> */}
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
