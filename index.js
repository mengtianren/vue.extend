import Vue from 'vue';
import Test from './index.vue';

const NewTest = Vue.extend(Test);

const init = (option) => {
  // 创建实例
  let Component = new NewTest();
  //   option; // 传入的值
  Object.assign(Component, option);
  // 把当前组件插入到dom元素
  document.body.appendChild(Component.$mount().$el);
  return Component.show(() => {
    Component = null;
  });
};
export default init;   // main.js   vue.prototype.$xxx = init
// export default {
//   install(Vue){
//     Vue.prototype.$xxx = init
//   }
// }  // main.js Vue.use(init)