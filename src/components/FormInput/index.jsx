import React from "react";
import Tooltip from "../Tooltip";

class FormInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errorStatus: false,
			errorMsg: "",
			tooltipVisible: false,
		};
	}
	//onchange

	//after blur the input feild validating form
	handleBlur = (e) => {
		//empty input feilds
		if (
			e.target.value === "" ||
			e.target.value === undefined ||
			e.target.value === null
		) {
			this.setState({
				errorStatus: true,
				errorMsg: `${
					this.props.label || this.props.placeholder || ""
				} feild is empty`,
			});
		} else {
			this.setState({
				errorStatus: false,
				errorMsg: "",
			});
		}
		//email validation
		if (e.target.type === "email" && e.target.value !== "") {
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
				this.setState({
					errorStatus: true,
					errorMsg: `${
						this.props.label || this.props.placeholder || null
					} invalid`,
				});
			} else {
				this.setState({
					errorStatus: false,
					errorMsg: "",
				});
			}
		}
		//password validation
		if (e.target.type === "password" && e.target.value !== "") {
			if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)) {
				this.setState({
					errorStatus: true,
					errorMsg: "min '8' char atleast '1' number and '1' letter ",
				});
			}
		}
	};
	//reseting state if it has any errorStatus true
	handleFocus = (e) => {
		if (e.target.value !== "" || e.target.value !== null) {
			this.setState({
				errorStatus: false,
				errorMsg: "",
			});
		}
	};
	// handleChange = (e) => {
	// 	this.props.changedValue({ [this.props.label]: e.target.value });
	// };

	render() {
		let { type, label, toolTip, ...otherProps } = this.props;
		return (
			<>
				<div className="form_group form_group-input">
					<input
						{...otherProps}
						title=""
						type={type || "text"}
						className="form_input"
						onFocus={(e) => {
							this.handleFocus(e);
						}}
						onBlur={(e) => {
							this.handleBlur(e);
						}}
						onChange={this.handleChange}
						onMouseOver={() => {
							this.setState({ tooltipVisible: true });
						}}
						onMouseLeave={() => {
							this.setState({ tooltipVisible: false });
						}}
					/>
					<label
						htmlFor={(this.props.id || label) ?? null}
						className="form_label"
					>
						{label ?? null}
					</label>
					{/* tooltip conditional rendering. */}
					{this.state.tooltipVisible && toolTip ? (
						<Tooltip {...toolTip} />
					) : null}
				</div>
				{/* validation error block */}
				<div className="msg-container">
					{this.state.errorStatus ? this.state.errorMsg : null}
				</div>
			</>
		);
	}
}

export default FormInput;
