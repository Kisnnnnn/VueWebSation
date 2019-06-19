<template>
  <div>
    <h1 class="title">{{ form.title }}</h1>
    <el-form ref="form"
             :model="form"
             @submit.native.prevent
             label-width="120px">
      <el-form-item label="分类名字">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="分类ID">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        title: '我是首页的子路由内容'
      }
    }
  },
  created() {

  },
  methods: {
    onSubmit() {
      console.log(fetch);
    },
    onBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
}
</script>
<style scoped>
.title {
  margin-bottom: 30px;
}
</style>
