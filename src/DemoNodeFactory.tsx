import { AbstractReactFactory } from "@projectstorm/react-canvas-core";
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { DemoNodeModel } from "./DemoNodeModel";
import { DemoNodeComponent } from "./DemoNodeComponent";
import React from "react";

export class DemoNodeFactory extends AbstractReactFactory<
	DemoNodeModel,
	DiagramEngine
> {
	constructor() {
		super("demo-node");
	}

	generateReactWidget(event: any): JSX.Element {
		return <DemoNodeComponent engine={this.engine} node={event.model} />;
	}

	generateModel(event: any) {
		return new DemoNodeModel(
			"circle",
			() => null,
			() => null,
			false
		);
	}
}
