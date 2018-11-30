<template>
<el-container>
    <el-header height="61px">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
		  <el-menu-item index="/home/data" :route="{path: '/home/data'}">处理中心</el-menu-item>
		  <el-menu-item index="/home/message" :route="{path: '/home/message'}" >消息中心</el-menu-item>
		  <el-menu-item index="/login" :route="{path: '/login'}" >登录</el-menu-item>
		</el-menu>
    </el-header>
  	<el-main>
  		<router-view/>
  	</el-main>
</el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    mounted(){

	},
    methods: {
      handleSelect(key, keyPath) {
      }
    }
  }
</script>
<style type="text/css">
</style>