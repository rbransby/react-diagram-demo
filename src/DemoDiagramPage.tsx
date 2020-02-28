import React, { useState, useEffect } from "react";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DemoNodeFactory } from "./DemoNodeFactory";
import { DemoNodeModel } from "./DemoNodeModel";
import createEngine, {
	DiagramModel,
	DiagramEngine
} from "@projectstorm/react-diagrams";
import { Typography } from "@material-ui/core";
import "./diagram-elements/DiagramStyles.css";

export const DemoDiagramPage: React.FC = () => {
	const [engine, setEngine] = useState({} as DiagramEngine);
	const [ready, setReady] = useState(false);
	const [selectedNode, setSelectedNode] = useState(
		undefined as DemoNodeModel | undefined
	);

	useEffect(() => {
		setReady(false);
		let engine = initialiseEngine();
		buildDiagram(engine);
		setEngine(engine);
		setReady(true);
	}, []);

	const initialiseEngine = () => {
		// create an instance of the engine with all the defaults
		const engine = createEngine();
		engine.getNodeFactories().registerFactory(new DemoNodeFactory());
		engine.setMaxNumberPointsPerLink(0);
		engine.setModel(new DiagramModel());
		return engine;
	};

	const buildDiagram = (engine: DiagramEngine) => {
		const model = new DiagramModel();
		model.addNode(
			new DemoNodeModel(
				"circle",
				nodeSelected,
				nodeEdit,
				selectedNode ? selectedNode.getOptions().shape == "circle" : false
			)
		);
		model.addNode(
			new DemoNodeModel(
				"triangle",
				nodeSelected,
				nodeEdit,
				selectedNode ? selectedNode.getOptions().shape == "triangle" : false
			)
		);
		model.addNode(
			new DemoNodeModel(
				"arrow",
				nodeSelected,
				nodeEdit,
				selectedNode ? selectedNode.getOptions().shape == "arrow" : false
			)
		);
		engine.setModel(model);
	};

	const onCanvasClicked = () => {
		console.log("canvas clicked");
		setSelectedNode(undefined);
	};

	const nodeSelected = (newSelectedNode: DemoNodeModel) => {
		if (
			!selectedNode ||
			selectedNode.getOptions().shape != newSelectedNode.getOptions().shape
		) {
			console.log(`node ${newSelectedNode.getOptions().shape} was selected`);
			setSelectedNode(newSelectedNode);
		}
	};

	const nodeEdit = (selectedNode: DemoNodeModel) => {
		console.log(`node ${selectedNode.getOptions().shape} was edited`);
	};

	return (
		<>
			<div
				onWheel={e => {
					e.stopPropagation();
				}}
				onClick={onCanvasClicked}
				style={{ padding: 10, backgroundColor: "#F7F7F7", height: "500px" }}
			>
				<Typography variant="h1">Robs Demo Diagram</Typography>
				{!ready && <span>Loading...</span>}
				{ready && (
					<CanvasWidget engine={engine} className="diagram-container" />
				)}
			</div>
		</>
	);
};
