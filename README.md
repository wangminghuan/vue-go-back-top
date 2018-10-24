# vue-go-back-top

> vue移动端返回顶部组件
# 说明

组件只有一个功能点击返回顶部

# 预览

![demo](https://i.imgur.com/uNdhfpi.gif)

# 使用

    import {GoTop} from "vue-go-back-top";
    //或
    import GoTop from "vue-go-back-top";

    Vue.component(GoTop.name, GoTop)  
    //或
    Vue.use(GoTop)  






## 项目运行

### 安装
	npm install

### 本地运行
	npm run dev

### 构建发布
	npm run build

## 如何发布自己vue组件到npm
1. vue-cli生成配置，编写组件，注意封装，依赖等
2. 与正常引用不同，需要将vue组件暴露出来

		/* 
		Vue.component( id, [definition] )
		注册或获取全局组件。注册还会自动使用给定的id设置组件的名称
		
		1. 注册组件，传入一个选项对象 (自动调用 Vue.extend)
		Vue.component('my-component', { ... })
		
		2.获取注册的组件 (始终返回构造器)
		var MyComponent = Vue.component('my-component')
		*/
		//----通过官方暴露的公共方法install，将组件注册。
		GoTop.install =  (Vue) =>{
		  Vue.component(GoTop.name, GoTop)
		}
		//----end

       //-----以下为当vue为全局变量时，自动安装的逻辑，也就是是支持标签外部引用的方式
		const components = [
		  GoTop
		]
		
		const install = (Vue, opts = {})=> {
		  components.forEach(component => {
		    Vue.component(component.name, component)
		  })
		}
		if (typeof window !== 'undefined' && window.Vue) {
		  install(window.Vue);
		}
        //-----end
       
		//----对外暴露对象，支持import {xx} from "xx" 的方式引用
		export {
		  GoTop
		}
		//对外暴露默认对象，对外暴露默认对象，支持import xx from "xx" 的方式引用(与上面方法可以共存)
		export default GoTop
        //---end

3. 修改配置文件中的entry入口，指向上面编写的index.js文件
4. 修改配置中的vue-loader.conf中的css抽离关闭（如果不关闭，则需要在引入组件的同时，手动把css文件再引入）如:  

		 import {GoTop} from "vue-go-back-top";
		 import 'vue-go-back-top/dist/vue-go-back-top.css';（如果使用css in js 则无需单独引用，路径同打包后的路径）
5. 修改配置中的webpack.prod.conf的output配置修改

	      output: {
		    filename: 'vue-go-back-top.js', // 我们可不想打包后叫build.js 多low啊 起一个与项目相对应的
		    library: 'vue-go-back-top', // library指定的就是你使用require时的模块名，这里便是require("PayKeyboard")
		    libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
		    umdNamedDefine: true,
		  },
再将`app.js,vendor.js,manifest.js`,抽离插件都关闭，使得所有js代码合并成一个js文件。将`HtmlWebpackPlugin`,`ExtractTextPlugin（视情况而定）`等插件也关闭。
6. 完善package.json

		  {
 		  "name": "vue-go-back-top", //最好同组件名一样，这是npm上可以搜索到的名称
		  "version": "1.0.2", //npm包版本，每次发布都需要修改一次
		  "description": "vue移动端返回顶部组件",//npm展示需要，会自动提取到对应位置
		  "author": "wangminghuan", //作者
		  "license": "MIT", //协议
		  "keywords": [ //关键字
		    "vue",
		    "goTop",
		    "backTop"
		  ],
		  "repository": { //npm展示需要，会自动提取到对应位置
		    "type": "git",
		    "url": "https://github.com/wangminghuan/vue-go-back-top"
		  },
		  "private": false, //发到npm必须置为false
		  "main":"dist/vue-go-back-top.js", //他人使用时通过 import {GoTop} from "vue-go-back-top" 使用时，npm默认加载的入口文件位置，必须正确配置。否则会出现安装成功但找不到包的情况
          ...
          }

## 参考文献

1. [vue官网-开发插件](https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)
