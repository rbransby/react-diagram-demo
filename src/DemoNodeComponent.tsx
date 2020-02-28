import React, { useState } from "react";
import { DemoNodeModel } from "./DemoNodeModel";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { CircleDiagramElement } from "./diagram-elements/CircleDiagramElement";
import { ArrowDiagramElement } from "./diagram-elements/ArrowDiagramElement";
import { TriangleDiagramElement } from "./diagram-elements/TriangleDiagramElement";

interface DemoNodeComponentProps {
	node: DemoNodeModel;
	engine: DiagramEngine;
}

export const DemoNodeComponent: React.FC<DemoNodeComponentProps> = props => {
	const [isSelected, setIsSelected] = useState(
		props.node.getOptions().isSelected
	);

	return (
		<div
			onClick={e => {
				e.stopPropagation();
				setIsSelected(!isSelected);
				props.node.getOptions().onNodeSelected(props.node);
			}}
		>
			{props.node.getOptions().shape == "circle" && (
				<CircleDiagramElement
					name="circle"
					node={props.node}
					engine={props.engine}
					highlighted={isSelected}
				/>
			)}
			{props.node.getOptions().shape == "arrow" && (
				<ArrowDiagramElement
					name="arrow"
					node={props.node}
					engine={props.engine}
					highlighted={isSelected}
				/>
			)}
			{props.node.getOptions().shape == "triangle" && (
				<TriangleDiagramElement
					name="triangle"
					node={props.node}
					engine={props.engine}
					highlighted={isSelected}
				/>
			)}
		</div>
	);
};
