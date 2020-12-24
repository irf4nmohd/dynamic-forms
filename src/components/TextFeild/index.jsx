import React from "react";
import Tooltip from "../Tooltip";

class TextFeild extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errorStatus: false,
			errorMsg: "",
			tooltipVisible: false,
		};
	}
	/*method is for sending feild value to parent component*/
	handleChange = (e) => {
		let { onChangingValue } = this.props;
		let { type, value } = e.target;
		/*this is to avoiding undefined onChangingValue prop */
		if (onChangingValue) {
			if (value !== "" || value !== undefined || value !== null) {
				if (type === "text") {
					if (/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}$/im.test(value)) {
						onChangingValue(e);
					}
				} else if (type === "email") {
					if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
						onChangingValue(e);
					}
				} else if (type === "password") {
					if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
						onChangingValue(e);
					}
				}
			}
		}
	};

	/*after bluring the input feild validating form*/
	handleBlur = (e) => {
		let { label, placeholder } = this.props.obj ?? {};
		let { type, value } = e.target;
		/*empty input feilds*/
		if (value === "" || value === undefined || value === null) {
			this.setState({
				errorStatus: true,
				errorMsg: `${label ?? placeholder ?? "This"} feild is empty`,
			});
		} else {
			/*name validation*/
			if (type === "text" && value !== "") {
				if (!/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}$/im.test(value)) {
					this.setState({
						errorStatus: true,
						errorMsg:
							"special char use only '. _' & atleast above '4' & no '.' at ending ",
					});
				} else {
					this.setState({
						errorMsg: "",
						errorStatus: false,
					});
				}
			}
			/*email validation */
			if (type === "email" && value !== "") {
				if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
					this.setState({
						errorStatus: true,
						errorMsg: `${label ?? placeholder ?? "This"} invalid`,
					});
				} else {
					this.setState({
						errorMsg: "",
						errorStatus: false,
					});
				}
			}
			/*password validation*/
			if (type === "password" && value !== "") {
				if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
					this.setState({
						errorStatus: true,
						errorMsg: "min '8' char atleast '1' number and '1' letter ",
					});
				} else {
					this.setState({
						errorMsg: "",
						errorStatus: false,
					});
				}
			}
		}
	};
	//email validation
	/*reseting state if it has any errorStatus true*/
	handleFocus = (e) => {
		if (e.target.value !== "" || e.target.value !== null) {
			this.setState({
				errorStatus: false,
				errorMsg: "",
			});
		}
	};

	render() {
		let { type, label, toolTip, id, name, ...otherProps } =
			this.props.obj ?? {};
		return (
			<section className="feild_container">
				<div className="entry">
					<div className="entry_feild">
						<div className="input_tooltip-wrapper">
							<input
								{...otherProps}
								name={name ?? label ?? id ?? type ?? "input"}
								title=""
								id={id ?? label ?? "input"}
								type={type ?? "text"}
								className="entry_feild-input"
								onFocus={this.handleFocus}
								onBlur={this.handleBlur}
								onChange={this.handleChange}
								onMouseOver={() => {
									this.setState({ tooltipVisible: true });
								}}
								onMouseLeave={() => {
									this.setState({ tooltipVisible: false });
								}}
							/>
							<div
								className={`entry_tooltip tipPos-${
									toolTip?.tooltipPosition ?? "top"
								}`}
							>
								{this.state.tooltipVisible && toolTip && toolTip.content ? (
									<Tooltip {...toolTip} />
								) : null}
							</div>
						</div>

						<label
							htmlFor={id ?? label ?? "input"}
							className="entry_feild-label"
						>
							{label ?? null}
						</label>
					</div>
					<div className="msg-container">
						{this.state.errorStatus ? this.state.errorMsg : null}
					</div>
				</div>
			</section>
		);
	}
}

export default TextFeild;
