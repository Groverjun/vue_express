<template>
	<div>
		<h1>这里是数据中心</h1>
		<el-row>
			<el-col :span="4">
				<el-input  placeholder="请输入内容" v-model="name" clearable></el-input>
			</el-col>
			<el-col :span="2"><el-button type="primary" icon="el-icon-search" @click="submit">搜索</el-button>	</el-col>
		</el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	name:null,
      };
    },
    computed: {
	  
	},
	watch: {  
		
	},
	created(){
		
	},
	mounted(){

	},
    methods:{
    	submit(){
    		if(this.name==null||this.name==undefined||this.name==''){return false}
			this.$xhr.get("/first",{
				params:{
					name:this.name,
				}
			}).then((res)=>{
				console.log(res[0])
				this.$notify({
		          title: '消息',
		          message: res[0].UserPass
		        });
			}).catch(function (error) {
				console.error(error)
		    });    		
    	}
    }
  };	
</script>

<style>
</style>