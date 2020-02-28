import {
	DefaultLinkModel,
	NodeModel,
	NodeModelGenerics,
	DefaultPortModel
} from "@projectstorm/react-diagrams";
import { BasePositionModelOptions } from "@projectstorm/react-canvas-core";

export interface DemoNodeModelOptions extends BasePositionModelOptions {
	onNodeEdit: (selectedNode: DemoNodeModel) => void;
	onNodeSelected: (selectedNode: DemoNodeModel) => void;
	isSelected: boolean;
	shape: "circle" | "triangle" | "arrow";
}

export interface DemoNodeParams extends NodeModelGenerics {
	OPTIONS: DemoNodeModelOptions;
}

export class DemoNodeModel extends NodeModel<DemoNodeParams> {
	constructor(
		shape: "circle" | "triangle" | "arrow",
		onNodeSelected: (selectedNode: DemoNodeModel) => void,
		onNodeEdit: (selectedNode: DemoNodeModel) => void,
		isSelected: boolean
	) {
		super({
			type: "demo-node", // <-- here we give it a new type
			shape: shape,
			onNodeSelected: onNodeSelected,
			onNodeEdit: onNodeEdit,
			isSelected: isSelected
		});

		this.addPort(new DefaultPortModel(true, "In", "In"));
		this.addPort(new DefaultPortModel(false, "Out", "Out"));

		this.height = 100;
		this.width = 100;
	}
}
