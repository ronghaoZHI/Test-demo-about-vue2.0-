# Vue.js音乐播放器
初学Vue做了一个音乐播放器😉。

## 技术栈
**Vue2**

**Vuex**

**vue-router**

**axios**

**SASS(SCSS)**

**Webpack**：自动化构建工具，大部分配置vue-cli脚手架已经弄好了，很方便。😏

**ES6**

**localStorage(HTML5)**

## 使用 Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 遇到的问题
1. vuex什么时候使用，如何使用，就要看项目需要。引用 Redux 的作者 Dan Abramov 的话说就是：

  > Flux 架构就像眼镜：您自会知道什么时候需要它。

  各组件之间状态共享也是难点。

2. 异步编程：JS是单线程，异步编程尤为重要。当我们向后端请求数据，是异步的，如果没有处理好相关的异步操作，是会有各种问题的。JS可以利用`setTimeout`、`回调`、`Generator`、`Promise`、`Async`。
定时这种方式太麻烦，还是不推荐；回调层次多了，有回调地狱，代码维护性很差；Generator需要手动去执行，当然可以使用类似`co`的模块。相比之下`Promise`和`Async`是比较理想的。
3. 本项目中使用了One(一个)的接口，后端API编写也是难点，包含了各种异步请求。对返回数据的解析也是难点，有的时候你还需要对数据进行解码。
4. 各组件结构的设计：一开始大纲没设计好，后面想修改涉及面会很广。
5. 过渡动画让交互更有趣，但是有的还是耗性能的，有设备差异，没用好会造成卡顿。

【声明】：本项目仅供学习交流，请不要用做任何商业用途😊有任何疑问请联系作者📩

