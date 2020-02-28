import DiagramElementProps from "./DiagramElementProps";
import React, { useState } from "react";
import { PortWidget, PortModel, PortModelGenerics } from "@projectstorm/react-diagrams";
import SettingsIcon from "@material-ui/icons/Settings";
import "./DiagramStyles.css";

export const CircleDiagramElement: React.FC<DiagramElementProps> = props => {
	const [hovering, setHovering] = useState(false);
	return (
		<div
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			style={{ width: "100px", height: "100px", lineHeight: "100px" }}
		>
			<svg width="100px" height="100px">
				<circle
					cx="50"
					cy="50"
					r="48"
					fill="#002776"
					stroke="black"
					strokeWidth="2"
					style={props.highlighted ? { strokeDasharray: 10, animation: "dash 10s linear infinite" } : {}}
				/>
				<text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="Roboto">
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
					bottom: 5,
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
