<template>
	<el-row >
		<el-col :span="22" :offset="1">
			<el-upload
			  class="upload-demo"
			  :action="fileUrl"
			  :on-preview="handlePictureCardPreview"
			  :on-success="ImagesSuccess"
			  :on-error="ImagesError"
			  :before-upload="handleImagesUrlBefore"
			  :file-list="fileList"
			  list-type="picture-card">
			  <i class="el-icon-plus"></i>
			</el-upload>
		</el-col>
	</el-row>


</template>

<script>
  export default {
    data() {
      return {
      	fileUrl:this.baseURL.dev+"/upload",
        fileList: []
      };
    },
    created(){
		
	},
	mounted(){
		console.log(this.fileUrl)
	},
    methods: {
	    handlePictureCardPreview(res) {
	        console.log(res)
	    },
	    ImagesSuccess(res){
	    	alert("成功")
	    },
	    ImagesError(res){
	    	alert("错误")
	    },
		handleImagesUrlBefore:function(file){ 
            var _this = this; 
            return new Promise(function(resolve, reject) { 
                var reader = new FileReader(); 
                reader.onload = function(event) { 
                    var image = new Image(); 
                    image.onload = function () { 
                        var width = this.width; 
                        var height = this.height; 
//                      if (width>1000 || width < 685){ 
//                          _this.$alert('图片尺寸必须在685~695之间!', '提示', {confirmButtonText: '确定'}); 
//                          reject(); 
//                      } 
//                      if (height >695||height< 685) { 
//                          _this.$alert('图片尺寸必须在685~695之间!', '提示', {confirmButtonText: '确定'}); 
//                          reject(); 
//                      } 
                        resolve(); 
                    }; 
                    image.src = event.target.result; 
                } 
                reader.readAsDataURL(file); 
            }); 
        }

	}
}
</script>

<style>

</style>