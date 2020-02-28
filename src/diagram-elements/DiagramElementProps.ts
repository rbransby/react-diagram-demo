
import { DiagramEngine } from "@projectstorm/react-diagrams";
import { DemoNodeModel } from "../DemoNodeModel";

export default interface DiagramElementProps {
	name: string;
	node: DemoNodeModel;
	engine: DiagramEngine;
	highlighted?: boolean;
}
