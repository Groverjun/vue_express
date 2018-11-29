<template>
<el-container>
    <el-header height="61px">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3" >消息中心</el-menu-item>
		</el-menu>
		<div class="message_top">
			<el-badge :value="12" class="item"> 
			    <el-popover placement="bottom"  title="标题" width="200"trigger="click">
			    	<div>000</div>
				    <el-button slot="reference">click 激活</el-button>
				</el-popover>
			</el-badge>
		</div>
    </el-header>
  	<el-main>
  		内容区0000
  	</el-main>
</el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    mounted(){
		//this.open("aaa","warning")
			this.$xhr.get("/first",{
				params:{
					name:"冬马和纱",
				}
			}).then((res)=>{
				console.log(res)
			}).catch(function (error) {
				console.error(error)
		    });
	},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/css">
</style>