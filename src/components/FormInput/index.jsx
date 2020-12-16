import React, { Component } from "react";

class FormInput extends Component {
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
				errorMsg: `${this.props.label} feild is empty`,
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
					errorMsg: `${this.props.label} invalid`,
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
				...this.state,
			});
		}
	};
	// handleChange = (e) => {
	// 	this.props.changedValue({ [this.props.label]: e.target.value });
	// };

	render() {
		return (
			<>
				<div className="form_group form_group-input">
					<input
						onMouseOver={() => {
							this.setState({ tooltipVisible: true });
						}}
						onMouseLeave={() => {
							this.setState({ tooltipVisible: false });
						}}
						maxLength={20}
						type={this.props.type || "text"}
						className={"form_input"}
						id={this.props.id || this.props.label}
						placeholder={this.props.placeholder || this.props.label}
						required={this.props.required || false}
						autoComplete="off"
						disabled={this.props.disabled || false}
						onFocus={(e) => {
							this.handleFocus(e);
						}}
						onBlur={(e) => {
							this.handleBlur(e);
						}}
						onChange={this.handleChange}
						title=""
					/>
					<label htmlFor={this.props.id} className="form_label">
						{this.props.label}
					</label>
					{this.state.tooltipVisible ? (
						<div
							className={`tooltip-bubble tooltip-${this.props.toolTip.position}`}
						>
							<div className="tooltip-message">
								{this.props.toolTip.content}
							</div>
						</div>
					) : null}
				</div>
				<div className="msg-container">
					{this.state.errorStatus ? this.state.errorMsg : null}
				</div>
			</>
		);
	}
}

export default FormInput;
