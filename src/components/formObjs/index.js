export const textObj = {
	type: "text",
	id: "name",
	placeholder: "Enter Your Full Name",
	required: true,
	name: "fullName",
	label: "Full Name",
	autoComplete: "off",
	toolTip: {
		content: "user name",
		tooltipPosition: "bottom",
	},
};
export const emailObj = {
	type: "email",
	id: "email",
	placeholder: "Enter your EmailID",
	required: true,
	name: "emailId",
	label: "EmailId",
	autoComplete: "off",
	toolTip: {
		content: "user email",
		tooltipPosition: "top",
	},
};
export const passwordObj = {
	type: "password",
	id: "password",
	placeholder: "password",
	name: "userPassword",
	required: true,
	label: "Password",
	autoComplete: "off",
	toolTip: {
		content: "user Password",
		tooltipPosition: "left",
	},
};

export const radioObj = {
	type: "radio",
	name: "gender",
	btns: [
		{ label: "female", value: "female", id: "female" },
		{
			label: "male",
			value: "male",
			id: "male",
		},
	],
	required: true,
};

export const dropdownObj = {
	name: "Qualification",
	options: ["B.tech", "M.tech"],
	required: true,
};
