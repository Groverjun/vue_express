<template>
	<el-row >
		<el-col :span="22" :offset="1">
			<el-upload
			  class="upload-demo"
			  :action="fileUrl"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
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
      	fileUrl:this.baseURL.dev+"upload",
        fileList: []
      };
    },
    created(){
		
	},
	mounted(){
		console.log(this.baseURL)
	},
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        this.$message(file.response.urlFile);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      ok(response, file, fileList){
      	console.log(response)
      }
    }
  }
</script>

<style>
</style>