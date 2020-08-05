#### 本周学习主题

##### 组件化 | Tab 组件和 List 组件

- 内容型组件：
  - TabPanel
  ```html
  <TabPanel>
  	<span title="title1">This is content1</span>
  	<span title="title2">This is content2</span>
  	<span title="title3">This is content3</span>
  	<span title="title4">This is content4</span>
  </TabPanel>
  ```
  - ListView
  ```html
  <ListView data="{data}">
  	{(record) => (
  	<figure>
  		<img src="{record.url}" />
  		<figcaption>{record.name}</figcaption>
  	</figure>
  	)}
  </ListView>
  ```
- 处理 css

  1. 可以使用 css-loader 将 css 添加到 style 标签内，但存在污染全局的问题

  ```javascript
  import css from "./carousel.css";
  console.log(css);
  let style = document.createElement("style");
  style.innerHTML = css[0][1];
  document.head.appendChild(style);
  ```

  2. 可以借助 css 这个库自定义一个 cssloader，将没有与 css 样式文件同名前缀的 css 选择器加上同名的 css class，从而避免一定的全局污染问题

     - cssloader.js

     ```javascript
     // cssloader.js
     let css = require("css");

     module.exports = function (source, map) {
     	let name = this.resourcePath.match(/([^/]+).css$/)[1];

     	let obj = css.parse(source);

     	for (let rule of obj.stylesheet.rules) {
     		rule.selectors = rule.selectors.map((selector) =>
     			selector.match(new RegExp(`^.${name}`))
     				? selector
     				: `.${name} ${selector}`
     		);
     	}

     	return `
         let style = document.createElement("style");
         style.innerHTML = ${JSON.stringify(css.stringify(obj))};
         document.head.appendChild(style);
         `;
     };
     ```

     - carousel.css

     ```css
     .carousel {
     	width: 500px;
     	height: 300px;
     	white-space: nowrap;
     	/* outline: 1px solid blue; */
     	overflow: hidden;
     }
     .carousel > img {
     	width: 100%;
     	height: 100%;
     	display: inline-block;
     	/* transition: ease 0.3s; */
     }

     /* 以下规则会污染全局 */
     * {
     	background-color: lightblue;
     }
     ```

     - 经过自定义的 cssloader 处理后，carousel.css 中不带.carousel 前缀的样式规则将会被加上.carousel

##### 工具链 | 整体理解一个工具链的设计

- 常见前端工具

  - 初始化
    - yeoman
    - create-react-app
    - vue-cli
  - 开发/调试
    - dev-tool/chrome
    - webpack-dev-server
    - mock
    - wireshark
    - charles
  - 测试
    - mocha
    - jest
  - 发布
    - lint
    - jenkins

- 常见的初始化工具：
  - @vue/cli
    - 文档地址：[https://cli.vuejs.org/](https://cli.vuejs.org/)
    - 创建的项目中 package.json 中包含的命令：
      ```javascript
        "scripts": {
          "serve": "vue-cli-service serve",
          "build": "vue-cli-service build",
          "lint": "vue-cli-service lint"
        },
      ```
  - create-react-app
    - 文档地址：[https://reactjs.org/docs/create-a-new-react-app.html](https://reactjs.org/docs/create-a-new-react-app.html)
    - 创建的项目中 package.json 中包含的命令：
      ```javascript
          "scripts": {
              "start": "react-scripts start",
              "build": "react-scripts build",
              "test": "react-scripts test",
              "eject": "react-scripts eject"
            },
      ```
  - @angular/cli
    - 文档地址：[https://angular.cn/guide/setup-local](https://angular.cn/guide/setup-local)
    - 创建的项目中 package.json 中包含的命令：
      ```javascript
        "scripts": {
          "ng": "ng",
          "start": "ng serve",
          "build": "ng build",
          "test": "ng test",
          "lint": "ng lint",
          "e2e": "ng e2e"
        },
      ```
- 课间插播：

  - Y Combinator
    - 使用闭包让函数可以递归，从而达到图灵完备
    - [http://kestas.kuliukas.com/YCombinatorExplained/](http://kestas.kuliukas.com/YCombinatorExplained/)

- Yeoman

  - 可以用来编写一个类似 vue-cli create-react-app 的 generator
  - 文档地址：[https://yeoman.io/learning/](https://yeoman.io/learning/)

