## parcel打包工具零配置开发vue即便基本使用

- 全局安装parcel命令行工具

```bash
yarn global add parcel-bundler # 或者
npm install parcel-bundler -g 
```

- 初始化项目

```bash
npm init -y
npm install vue vue-router --save
```

- 新建项目`index.html`入口文件：在项目根目录下，并将其script地址指向项目js的主文件:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
  <script src="./src/index.js"></script>
</body>
</html>
```

- 新建项目js主文件

```js
import Vue from 'vue';
import App from './App';
import router from './router';
import './style/index.scss';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

- 安装解析vue的插件

```bash
npm install parcel-vue --save-dev
```

- 执行parcel index.html
> parcel 会自动根据index.html 中依赖去进行编译，如果css等也会自动去下载相关编译器