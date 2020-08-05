import { create } from "./create";
import { Carousel } from "./Carousel";
import { TabPanel } from "./TabPanel";
import { ListView } from "./ListView";

// class Div {
//     constructor(config) {
//         // console.log("config", config);
//         this.children = [];
//         this.root = document.createElement("div");
//     }

//     // set class(v) { // property
//     //     // console.log("Parent::class", v);
//     // }

//     setAttribute(name, value) { // attribute
//         // console.log(name, value);
//         this.root.setAttribute(name, value);
//     }

//     appendChild(child) {
//         this.children.push(child);
//     }

//     mountTo(parent) {
//         parent.appendChild(this.root);

//         for (let child of this.children) {
//             child.mountTo(this.root);
//         }
//     }

// }

// class MyComponent {
//     constructor(config){
//         this.children = [];
//     }

//     setAttribute(name, value) { // attribute
//         this.root.setAttribute(name, value);
//     }

//     appendChild(child){
//         this.children.push(child);
//     }

//     render(){
//         return (
//             <article>
//                 <header>I'm a header</header>
//                 {this.slot}
//                 <footer>I'm a footer</footer>
//             </article>
//         );
//     }

//     mountTo(parent){
//         this.slot = <div></div>;

//         for (let child of this.children){
//             this.slot.appendChild(child);
//         }

//         this.render().mountTo(parent);
//     }

// }

// let component = <div id="a" class="b" style="width: 100px; height: 100px; background-color: lightgreen;">
//         <div></div>
//         <p>abc</p>
//         <div></div>
//         <div></div>
//     </div>

let component = (
	<Carousel
		data={[
			"https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
			"https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
			"https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
			"https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
		]}
	/>
);

// let panel = (
// 	<TabPanel>
// 		<span title="title1">This is content1</span>
// 		<span title="title2">This is content2</span>
// 		<span title="title3">This is content3</span>
// 		<span title="title4">This is content4</span>
// 	</TabPanel>
// );

// let data = [
// 	{
// 		name: "蓝猫",
// 		url:
// 			"https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
// 	},
// 	{
// 		name: "橘猫加白",
// 		url:
// 			"https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
// 	},
// 	{
// 		name: "狸花加白",
// 		url:
// 			"https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
// 	},
// 	{
// 		name: "橘猫",
// 		url:
// 			"https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
// 	},
// ];

// let list = (
// 	<ListView data={data}>
// 		{(record) => (
// 			<figure>
// 				<img src={record.url} />
// 				<figcaption>{record.name}</figcaption>
// 			</figure>
// 		)}
// 	</ListView>
// );

// console.log(component);

component.mountTo(document.body);
// component.setAttribute("id", "a");
