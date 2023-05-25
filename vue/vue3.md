# This is Vue3 kernel api
vue2 is Options Api, vue3 is Composition Api
### 数据响应式 reactive and ref
- reactive用来对数组、对象等引用类型数据的响应式监测; (official document: 我们可以用reactive()Api来声明响应式状态，由reactive()创建的对象都是javascript Proxy对象。  reactive() 只适用于对象 (包括数组和内置类型，如 Map 和 Set)。而另一个 API ref() 则可以接受任何值类型。) 
- [参见官网reactive()的局限性](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive "es6手册")
- DOM更新时机，当更新响应式状态后，DOM会自动更新。然而，需要注意，DOM的更新并不是同步的。相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次状态更改，每个组件都只更新一次。若要等待一个状态改变后的 DOM 更新完成，你可以使用 nextTick() 这个全局 API
```
import { nextTick } from 'vue';
function increment () {
    state.count++;
    nextTick(() => {
        // 访问更新后的数据
    })
}
```
- ref  reactive() 的种种限制归根结底是因为 JavaScript 没有可以作用于所有值类型的 “引用” 机制。为此，Vue 提供了一个 ref() 方法来允许我们创建可以使用任何值类型的响应式 ref

### 动态参数 
```
<a :[attributeName]="url">...</a>
<p :class="txt1">文字文本</p>
```

### 生命周期 life cycle
- onMounted钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码.   注意这并不意味着对 onMounted 的调用必须放在 setup() 或 <script setup> 内的词法上下文中。onMounted() 也可以在一个外部函数中调用，只要调用栈是同步的，且最终起源自 setup() 就可以


### 侦听器 watch vs. watchEffect#
- watch 和 watchEffect 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：
- watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
- watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

### 组件
- defineProps(['title'])  无需导入
- defineEmits(['enlarge-txt'])  无需导入


### props
- 所有的props都遵循单向绑定原则，props因父组件的更新而变化，自然地将新的状态向下流向子组件，而不会逆向传递。意味着不应该在子组件去修改一个prop

### 条件渲染
- v-if是“真实的”，也是“惰性的”。如果在初次渲染时条件为false，则不会做任何事情，只有在条件首次变为true时才会渲染。相比之下，v-show就相对简单，元素无论初始条件如何，始终 会被渲染，只有css display属性会被切换。总的来说，v-if有更高的切换开销，v-show有更高的初始切换开销
