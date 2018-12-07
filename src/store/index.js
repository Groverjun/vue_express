import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state ={
	userData:null
}
//  this.$store.state.ip
export default new Vuex.Store({
	 state:state,
});