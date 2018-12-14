<template>
	<div>
	<div style="width: 500px;height: 500px;">
		<vueCropper ref="cropper" :img="option.img":outputSize="option.size" :autoCrop="true" :centerBox="true" :fixedBox="true"  @realTime="realTime"></vueCropper>
	</div>
	<img v-bind:src="imgT" alt="" />
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	option:{
      		img:"http://localhost:8081/static/a.jpg",
      		size:1,
      		outputType:"",
      	},
      	imgT:null
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
    	realTime(){
    		this.$refs.cropper.getCropData((data) => {
				 // console.log(data)  
				 this.imgT=data
				})
    	}
    }
  };	
</script>

<style>
</style>