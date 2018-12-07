<template>
		<div style="height: 100%;">
			<mavon-editor v-model="value"@save="save" @imgAdd="$imgAdd" ref="md" @imgDel="$imgDel"/>
		</div>
</template>

<script>
  export default {
    data() {
      return {
      	value:'',
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
    	save(val,render){
    		if(val==''){this.open("没有内容呀，大兄弟","warning");return false}
    		this.$xhr.post("/markdown",{
    			"id":null,
				"markdown":JSON.stringify(render),
				"time":new Date().toLocaleDateString().toLocaleString()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
			}).then((res)=>{
				console.log(res)
				this.open("保存成功","success")
			}).catch((error)=> {
				console.error(error);
				this.open("大兄弟，报错了呀","error")
			});
    	},
        $imgAdd(pos, $file){
        	console.log(pos)
           	var formdata = new FormData();
           	formdata.append('file', $file);
		   	this.$xhr.post("/upload",formdata).then((res)=>{
				this.$refs.md.$img2Url(pos,res.urlFile);
			}).catch(function (error) {
				console.warn(error)
			});
        },
        $imgDel(filename){
        	console.log(filename)
        },
    }
  };	
</script>

<style>
</style>