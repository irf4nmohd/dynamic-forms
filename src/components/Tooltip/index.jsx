import React from "react";

function Tooltip({ tooltipPosition, content }) {
	return (
		<div className={`tooltip_container ${tooltipPosition ?? "top"}`}>
			<div className={`tooltip-${tooltipPosition ?? "top"}`}></div>
			<div className="tooltip-bubble">
				<div className="tooltip-message">{content}</div>
			</div>
		</div>
	);
}

export default Tooltip;
