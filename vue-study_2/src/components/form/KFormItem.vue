<template>
  <div>
    <!-- label -->
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <!-- 错误信息 -->
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import Validator from "async-validator";
import emitter from "@/mixins/emitter.js";
export default {
  name: "KFormItem",
  componentName: "KFormItem",
  inject: ["form"],
  mixins: [emitter],
  data() {
    return {
      error: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: String,
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
    // 派发事件 同志Kform 新增KFItem 实力
    if (this.props) {
      this.dispatch("KForm", "form.item", [this]);
    }
  },
  methods: {
    validate() {
      // 校验规则
      const rules = this.form.rules[this.prop];
      // 当前值
      const value = this.form.model[this.prop];

      // 创建一个校验器实例
      const validator = new Validator({ [this.prop]: rules });
      // 校验, 返回Promise
      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>