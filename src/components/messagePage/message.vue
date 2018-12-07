<template>
	<div>
		<el-button plain  @click="clickButton">点击获取消息</el-button>
	</div>
</template>

<script>
export default{
  data(){
      return{
          id:''
      }
  },
  sockets:{
  	//sockets 写要监听的事件
    message: function(res){  
  		this.id=this.$socket.id;
  		this.$notify({
          title: '消息',
          message: res.datas
        });
    },
    customEmit: function(val){
    	console.log(val)
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  mounted(){
  		//this.$socket.emit('message');
		//this.sockets.unsubscribe('message');
  },
  methods: {
    clickButton: function(val){
    	var val={name:"aaaa"}
        // $socket is socket.io-client instance
       this.$socket.emit('messageClick',val)
    }
  }
}

</script>