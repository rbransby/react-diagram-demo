import DiagramElementProps from "./DiagramElementProps";
import React, { useState } from "react";
import { PortWidget, PortModel, PortModelGenerics } from "@projectstorm/react-diagrams";
import SettingsIcon from "@material-ui/icons/Settings";

export const ArrowDiagramElement: React.FC<DiagramElementProps> = props => {
	const [hovering, setHovering] = useState(false);
	return (
		<div
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			style={{ width: "100px", height: "100px", lineHeight: "100px" }}
		>
			<svg width="100px" height="100px">
				<path
					xmlns="http://www.w3.org/2000/svg"
					stroke="black"
					strokeWidth="2"
					style={props.highlighted ? { strokeDasharray: 10, animation: "dash 10s linear infinite" } : {}}
					d="M 2,25 L 60,25 L 60,2 L 98,50 L 60,98, L 60,75 L 2,75 Z"
					fill="#4d689f"
				></path>
				<text
					style={{ transition: "0.2s ease", transform: `translate(0,${hovering ? "-10px" : "0"})` }}
					x="50%"
					y="50%"
					dominantBaseline="middle"
					textAnchor="middle"
					fill="white"
					fontFamily="Roboto"
				>
					{props.name}
				</text>
			</svg>
			<PortWidget
				style={{
					position: "absolute",
					left: -8,
					top: 42,
					opacity: hovering ? 1 : 0,
					transition: "opacity 0.2s ease"
				}}
				port={props.node.getPort("In") as PortModel<PortModelGenerics>}
				engine={props.engine}
			>
				<div className="circle-port" />
			</PortWidget>
			<PortWidget
				style={{
					position: "absolute",
					right: -8,
					top: 42,
					opacity: hovering ? 1 : 0,
					transition: "opacity 0.2s ease"
				}}
				port={props.node.getPort("Out") as PortModel<PortModelGenerics>}
				engine={props.engine}
			>
				<div className="circle-port" />
			</PortWidget>
			<SettingsIcon
				style={{
					position: "absolute",
					bottom: 30,
					left: 40,
					color: "white",
					opacity: hovering ? 1 : 0,
					transition: "opacity 0.2s ease",
					cursor: "pointer"
				}}
				fontSize="small"
				onClick={() => props.node.getOptions().onNodeEdit(props.node)}
			/>
		</div>
	);
};
