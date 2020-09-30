<template>
  <div class="position">
    <div class="content">
      <div>{{ title }}</div>
      <div class="button-par">
        <div class="button" @click="confirm">确认</div>
        <div class="button" @click="cancel">取消</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: '',
      title: '',
    };
  },
  methods: {
    show(cb) {
      typeof cb === 'function' && cb.call(this, this);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    confirm() {
      this.resolve('ok');
      this.hide();
    },
    cancel() {
      this.reject('err');
      this.hide();
    },
    hide() {
      // 从body里面移除当前组件
      document.body.removeChild(this.$el);
      // 插件注销
      this.$destroy();
    },
  },
};
</script>
<style lang="less" scoped>
.position {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    background: #fff;
    width: 80%;
    .button-par {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 30px;
      .button {
        padding: 10px;
        background: #1296db;
        color: #fff;
        margin-left: 20px;
      }
    }
  }
}
</style>
