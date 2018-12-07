<template>
	<div class="login" :style="{backgroundImage:'url(' +bgImg + ')'}" @click.stop="leftShow">
		<!--<verification @testOK="testOK"></verification>-->
		<div class="login_content" :style="{transform: 'translateX('+translateX+')'}" @click.stop="cliFun">
			<div class="login_content_position">
				<div class="login_top">
					<img src="@/assets/img/jie_1.png"/>
				</div>
				<div class="login_user">
					<div class="usesHeadImg"><img src="@/assets/img/headImg.jpg" width="100%"/></div>
					<div class="usesName"></div>
					<div class="usespassword">
						  <input type="text" v-model.trim="passWord" placeholder="password" @keyup.13="login" @input="passShow"/>
						  <i class="iconfont icon-jiantou_xiangyou" v-show="passIShow"></i>
					</div>
				</div>
				<div class="login_txt">
					<p class="sentence">每个人都有属于自己的一片森林，也许我们不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。</p>
					<p class="author">_____村上春树《挪威的森林》</p>
				</div>
			</div>
		</div>
		<div class="login_bottom">
			<i class="el-icon-arrow-left" @click.stop="addImg"></i>
			<i class="el-icon-arrow-right" @click.stop="reduceImg"></i>
		</div>
	</div>
</template>

<script>
import verification from"@/components/subPage/verification"
export default {
    data() {
      return {
	    bgImg:'',
	    days_ago:-1,
	    ifdown:false,
	    translateX:"-100%",
	    passIShow:false,
	    passWord:null
      };
    },
    components:{
    	verification
    },
    computed: {
	  
	},
	watch: {  
		
	},
	created(){
		
	},
	mounted(){
		//获取壁纸
		this.addImg()
	},
  methods:{
  	testOK(val){
  		console.log(val)
  	},
  	addImg(){
  		if(this.days_ago<14){this.days_ago+=1}else{return false}
  		this.fileImg()
  	},
  	reduceImg(){
  		if(this.days_ago>0){this.days_ago-=1}else{return false}
  		this.fileImg()
  	}, 
  	fileImg(){
  		this.$xhr.get("/imgFile",{
	  		params:{
				days_ago:this.days_ago
			}
	  	}).then((res)=>{
			this.bgImg=res;
		}).catch( (error)=>{
			console.error(error);
			this.open("获取壁纸失败","error")
		});
  	},
  	leftShow(){
  		if(this.translateX=="-100%"){
  			this.translateX="0%"
  		}else{
  			this.translateX="-100%"
  		}
  	},
  	cliFun(){return false},
  	login(){
  		if(this.$store.state.userData!=null){
  			this.$router.push({path: '/', name: 'home'})
  			return false
  		}
  		this.$xhr.post("/login",{
			passWord:this.passWord,
		}).then((res)=>{
			this.$store.state.userData=res;
			this.$router.push({path: '/', name: 'home'});
		}).catch((error)=>{
			this.passWord=null;
			this.open("密码错误","error")
		});
  	},
  	passShow(){
  		let str=this.passWord
		if(str.length!=0||this.passWord==null){
			this.passIShow=true;
		}else{
			this.passIShow=false
		}
  	}
  }
};	
</script>

<style>
.login{
	width: 100%;
	height: 100%;
	position: relative;
	background-color: #333;
	transition: background-image 1s ease-out;
}

.login_bottom{
	position: absolute;
	bottom: 20px;
	right: 20px;
}
.login_bottom i{
	font-size: 30px;
	display: inline-block;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	border: 1px solid #fff;
	color: #fff;
	text-align: center;
	line-height: 45px;
	cursor: pointer;
	margin-left: 40px;
	-moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
}
.login_bottom i:hover{
	background: #fff;
	color: #333;
}
.login_content{
	width: 30%;
	height: 100%;
	padding: 20px;
	position: absolute;
	background:rgba(0,0,0,0.05);
	transition: all 0.5s ease-out;
}
.login_content:hover{background:rgba(0,0,0,0.3);}
.login_content_position{
	width: 100%;
	height: 100%;
	position: relative;
}
.login_top{
	text-align: left;
	font-size: 24px;
}
.usesHeadImg{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	overflow: hidden;
	margin: auto;
}
.usespassword{
	width: 180px;
	height: 25px;
	margin:5px auto;
	overflow: hidden;
	position: relative;
}
.usespassword>input{
	width: 100%;
	border: none;
	background: #fff;
	outline: none;
	display: block;
	height: 100%;
	text-align: center;
	font-size: 12px;
}
.usespassword>i{
	position: absolute;
	right: 2px;
	top: 5px;
	cursor: pointer;
	color: #333;
}
.login_txt{
	position: absolute;
	bottom: 30px;
	font-size: 12px;
	
}
.login_content:hover .login_txt{transition: color 0.5 ease-in;color:#fff;}
.login_txt .author{text-align: right;padding-top: 5px;}
</style>