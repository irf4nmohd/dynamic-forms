export const formObj = {
	type: "text",
	id: "name",
	placeholder: "full name",
	required: true,
	label: "fullname",
	autoComplete: "off",
	toolTip: {
		content: "user name",
		tooltipPosition: "right",
	},
};
export const formEmailObj = {
	type: "email",
	id: "email",
	placeholder: "Enter your EmailID",
	required: true,
	label: "EmailId",
	autoComplete: "off",
	toolTip: {
		content: "user email",
		tooltipPosition: "top",
	},
};
export const formPasswordObj = {
	type: "password",
	id: "password",
	placeholder: "password",
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
		{ label: "female", value: "female" },
		{
			label: "male",
			value: "male",
		},
	],
};

export const dropdownObj = {
	name: "Qualification",
	options: ["B.tech", "M.tech"],
};
