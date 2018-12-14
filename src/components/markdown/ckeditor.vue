<template>
    <div id="ckeditor">
        <!-- 图片上传组件辅助-->
        <el-upload
                class="avatar-uploader"
                :action="serverUrl"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload">
        </el-upload>
        <!--富文本编辑器组件-->
        <quill-editor
                v-model="detailContent"
                ref="myQuillEditor"
                :options="editorOption"
                @change="onEditorChange($event)"
                @ready="onEditorReady($event)"
        >
        </quill-editor>
    </div>
</template>
<script>
// 工具栏配置
const toolbarOptions = [
['bold', 'italic', 'underline', 'strike'],      
[ 'image'],
]
    export default {
        data() {
            return {
                quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
                serverUrl: this.baseURL.dev+"/upload",  // 这里写你要上传的图片服务器地址
                header: {token: sessionStorage.token},  // 有的图片服务器要求请求头需要有token之类的参数，写在这里
                detailContent: '', // 富文本内容
                editorOption: {
                	placeholder: '',
                    theme: 'snow',  // or 'bubble'
                     modules:{
                     	toolbar: {
                     		container: toolbarOptions,  // 工具栏
                     		handlers: {
                     			'image': function (value) {
                     				if (value) {
                                        document.querySelector('#ckeditor .el-upload__input').click()
                                    } else {
                                        this.quill.format('image', false);
                                    }
                     			}
                     		}
                     		
                     	}
                     }
                	
                }  // 富文本编辑器配置
            }
        },
        methods: {
            // 上传图片前
            beforeUpload(res, file) {
            },
            onEditorReady(){
            	
            },
            onEditorChange(){
            	
            },
            onEditorReady(){
            	
            },
            uploadSuccess(res, file) {
                // 获取富文本组件实例
                let quill = this.$refs.myQuillEditor.quill;
                if(res.urlFile!==null){
                	 let length = quill.getSelection().index;
	                quill.insertEmbed(length, 'image', res.urlFile)
	                quill.setSelection(length + 1)
                }else{
                	 this.$message.error('图片插入失败')
                }
               
            },
       
            // 富文本图片上传失败
            uploadError() {
                // loading动画消失
                this.quillUpdateImg = false
                this.$message.error('图片插入失败')
            }
        }
    }
</script>