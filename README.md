# vite build 开启 cssCodeSplit:false 后，搭配 Unocss 使用，产生构建 bug

vite build 开启 cssCodeSplit:false 后，搭配 unocss 使用，打包出的单个 css 文件中，异步组件的 scoped 的样式被放在了样式表顶部，改变了 css 优先级，导致生环境项目样式错乱。

因为打算构建微前端子项目，项目所有 css 打包成单个样式文件，所以 vite.config.js 中 build 选项中配置了 cssCodeSplit: false。
但是搭配 unocss 后，异步组件 scoped 的样式被放在了单个样式表顶部，使得生产环境中 css 优先级改变了，样式错乱。

- vite build 默认开启异步样式分割 cssCodeSplit: true。构建结果见 [dist-cssCodeSplit-true](./dist-cssCodeSplit-true/)
- vite build 手动关闭异步样式分割 cssCodeSplit: true，增加 vue-router 异步组件构建结果 [dist-cssCodeSplit-false-router](./dist-cssCodeSplit-false-router/)。手动调用的异步组件构建结果 [dist-cssCodeSplit-false-async](./dist-cssCodeSplit-false-async/)
- vite build 手动关闭异步样式分割 cssCodeSplit: true， 再描述 unocss 后，构建结果样式错乱，[dist-cssCodeSplit-false-unocss](./dist-cssCodeSplit-false-unocss/)

如果项目中不使用 unocss ，样式构建正常， scoped 的样式被放在了单个样式表尾部。

```css
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #fff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
.read-the-docs[data-v-f01b5731] {
  color: #888;
}
.logo[data-v-0adc6510] {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 0.3s;
}
.logo[data-v-0adc6510]:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue[data-v-0adc6510]:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.async-router-yellow[data-v-dfa771b6] {
  color: #ff0;
}
.async-component-red[data-v-8080fde4] {
  color: red;
}
```

但是使用 unocss 构建后，样式错乱，scoped 的样式被放在了单个样式表顶部

```css
.async-router-yellow[data-v-dfa771b6] {
  color: #ff0;
}
.async-component-red[data-v-8080fde4] {
  color: red;
}
*,
:before,
:after {
}
...省略
```
