import React from "react";

function Tooltip({ tooltipPosition, content }) {
	return (
		<div className={`tooltip-bubble tooltip-${tooltipPosition || "top"}`}>
			<div className="tooltip-message">{content ?? null}</div>
		</div>
	);
}

export default React.memo(Tooltip);
