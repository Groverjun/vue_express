<template>
	<div id="dragPage" @mousedown="mousedown">
		在线客服		
	</div>
</template>

<script>
  export default {
    name: 'dragPage',
    data() {
      return {
      }
    },
    methods: {
      mousedown(event) {
        this.selectElement = document.getElementById("dragPage")
        var div1 = this.selectElement
        this.selectElement.style.cursor = 'move'
        this.isDowm = true
        var distanceX = event.clientX - this.selectElement.offsetLeft
        var distanceY = event.clientY - this.selectElement.offsetTop
        document.onmousemove = function (ev) {
          var oevent = ev || event
          div1.style.left = oevent.clientX - distanceX + 'px'
          div1.style.top = oevent.clientY - distanceY + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
          div1.style.cursor = 'default'
        }
      }
    }
  }
</script>

<style scoped>
	#dragPage{
		position: fixed;
		width: 150px;
		height: 200px;
		background: #409EFF;
		z-index: 1000;
		bottom: 20px;
		right: 20px;
	}
</style>