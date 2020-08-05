import { create } from "./create";

export class TabPanel {
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

	select(i) {
		for (let view of this.childViews) {
			view.style.display = "none";
		}
		this.childViews[i].style.display = "";

		for (let view of this.titleViews) {
			view.classList.remove("selected");
		}
		this.titleViews[i].classList.add("selected");
	}

	render() {
		this.childViews = this.children.map((child) => {
			return <div style="width: 300px;min-height:300px;">{child}</div>;
		});

		this.titleViews = this.children.map((child, i) => {
			return (
				<span
					onClick={() => {
						this.select(i);
					}}
					style="margin: 5px 5px 0 5px;font-size: 24px;cursor: pointer;"
				>
					{child.getAttribute("title")}
				</span>
			);
		});

		setTimeout(() => {
			this.select(0);
		}, 16);

		return (
			<div class="tab-panel" style="width: 300px;">
				<h1 style="width: 300px;margin: 0;">{this.titleViews}</h1>
				<div style="border: 1px solid lightgreen;">{this.childViews}</div>
			</div>
		);
	}

	mountTo(parent) {
		this.render().mountTo(parent);
	}
}
