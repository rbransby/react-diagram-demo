import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@material-ui/core";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { DemoDiagramPage } from "./DemoDiagramPage";

function App() {
	return (
		<div className="App">
			<DemoDiagramPage />
		</div>
	);
}

export default App;
