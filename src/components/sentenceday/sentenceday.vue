<template>
	<div class="sentenceday">
		<el-row>
		  <el-col :span="6" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 0">
		    <el-card :body-style="{ padding: '0px' }">
		      <img src="https://images.pexels.com/photos/1656584/pexels-photo-1656584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500%201x,%20https://images.pexels.com/photos/1656584/pexels-photo-1656584.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500%202x" class="image">
		      <div style="padding: 14px;">
		        <span class="titleContent">
					每个人都有属于自己的一片森林，也许我们不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。
				</span>
		        <div class="bottom clearfix">
		          <time class="time">{{ currentDate }}</time>
		          <el-button type="text" class="button" @click="dialogFormVisible = true">操作按钮</el-button>
		        </div>
		      </div>
		    </el-card>
		  </el-col>
		</el-row>	
		<el-dialog  :visible.sync="dialogFormVisible" center :show-close="false">
		  <el-form :model="form" label-position="top">
		    <el-form-item label="作者:" style="margin-bottom: 0;">
		       <el-input  v-model="form.name" ></el-input>
		    </el-form-item>
		    <el-form-item label="imgUrl:" style="margin-bottom: 0;">
		       <el-input  v-model="form.imgUrl" ></el-input>
		    </el-form-item>
		    <el-form-item label="内容:" style="margin-bottom: 0;">
		      <el-input  type="textarea" v-model="form.content"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button  @click="submitSentence">确认</el-button>
		    <el-button  @click="dialogFormVisible = false">取消</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	currentDate: new Date(),
      	dialogFormVisible: false,
      	formLabelWidth: '50px',
      	form: {
          name: '',
          content:'',
          imgUrl:''
        },
        
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
    	submitSentence(){
    		if(this.form.content==''||this.form.name==''||this.form.imgUrl==''){
    			this.open("没有内容呀，大兄弟","warning")
    			return false
    		}
    		this.$xhr.post("/sentenceday",{
    			"id":1,
				"sentence":this.form.content,
				"author":this.form.name,
				"imgUrl":this.form.imgUrl,
				"time":new Date().toLocaleDateString().toLocaleString()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
			}).then((res)=>{
				console.log(res)
				this.dialogFormVisible = false
				this.open("保存成功","success")
			}).catch( (error)=> {
				console.error(error);
				this.dialogFormVisible = false
				this.open("大兄弟，报错了呀","error")
			});
    	}
    }
};	
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .titleContent{
  	font-size: 14px;
  }
.sentenceday .el-dialog--center .el-dialog__body{
  	padding:25px 25px 5px 25px;
}
.sentenceday .el-dialog{border-radius: 10px;}
.sentenceday .el-dialog__footer{
 	padding: 7px 20px 10px;
}
.occupy{
  	padding: 0 5px;
}
  .sentenceday .el-dialog .el-dialog__header{padding: 0;}
  .sentenceday  .el-textarea__inner{min-height: 100px !important;}
  .sentenceday .el-form--label-top .el-form-item__label{padding: 0;}
</style>