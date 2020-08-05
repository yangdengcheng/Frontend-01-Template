import { create } from "./create";

export class ListView {
	constructor(config) {
		this.children = [];
		this.state = Object.create(null);
	}

	setAttribute(name, value) {
		// attribute
		this[name] = value;
	}

	getAttribute(name) {
		return this[name];
	}

	appendChild(child) {
		this.children.push(child);
	}

	render() {
		let data = this.getAttribute("data");

		return (
			<div class="list-view" style="width: 300px;">
				{data.map(this.children[0])}
			</div>
		);
	}

	mountTo(parent) {
		this.render().mountTo(parent);
	}
}
