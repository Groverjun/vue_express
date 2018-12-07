<template>
<el-container>
	<el-aside width="auto">
    	<el-scrollbar>
    		<el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="menuIf"  router  background-color="#2f323e"  text-color="rgba(255,255,255,0.5)" active-text-color="#fff">
			  <el-menu-item index="/home/data" :route="{path: '/home/data'}">
			  	<i class="el-icon-menu"></i>
			  	<span slot="title">监控中心</span>
			  </el-menu-item>
			  <el-menu-item index="/home/markdown" :route="{path: '/home/markdown'}">
			  	<i class="el-icon-edit"></i>
			  	<span slot="title">Markdown编写</span>
			  </el-menu-item>
			  <el-menu-item index="/home/sentenceday" :route="{path: '/home/sentenceday'}" >
			  	<i class="el-icon-edit-outline"></i>
			  	<span slot="title">每日一句</span>
			  </el-menu-item>
			  <el-menu-item index="/home/img" :route="{path: '/home/img'}" >
			  	<i class="el-icon-upload"></i>
			  	<span slot="title">上传图片</span>
			  </el-menu-item>
			</el-menu>
  		</el-scrollbar>
    </el-aside>
  	<el-container>
	    <el-header height="61px">
	    	<el-row>
				<el-col :span="1">
					<div class="home_logo" @click="menu">
						<img src="@/assets/img/jie.png"/>
					</div>
				</el-col>
			</el-row>
	    </el-header>
     	<el-main>
	  		<el-scrollbar>
	  			<router-view/>
	  		</el-scrollbar>
	  	</el-main>
  	</el-container>

</el-container>


</template>

<script>
  import homeMessage from"@/components/subPage/homeMessage"
  export default {
    data() {
      return {
        activeIndex: this.$route.path,
        menuIf:true,
      };
    },
    components:{
    	homeMessage
    },
    computed:{
		list(){
			return this.$route.path
		},
	},
	watch:{
		list(value) {  
	        this.activeIndex=value
	    },
	},
	created(){
		//if(this.$store.state.userData==null){this.$router.push({path: '/login', name: 'login'})}
	},
    mounted(){
	},
    methods: {
    	menu(){
    		if(this.menuIf){
    			this.menuIf=false
    		}else{
    			this.menuIf=true
    		}
    	}
    }
  }
</script>
<style type="text/css">
	.el-aside{}
</style>