import Vue from 'vue'
import Vuex from 'vuex'
import User from "@/vo/user";
import CommonUtil from "@/utils/commonUtil";
import {Object} from  "@/utils/commonUtil"
import AxiosUtil from "@/utils/axiosUtil";
import TokenUtil from "@/utils/tokenUtil";
import SessionStorageUtil from "@/utils/sessionStorageUtil";

Vue.use(Vuex);

/*
  约定，组件不允许直接变更属于 store 实例的 state，而应执行 action 来分发 (dispatch) 事件通知 store 去改变
 */
export default new Vuex.Store({
  state: {
    user:User,
  },
  getters:{
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    async setUser({commit}){
      let thid = this;
      console.log("调用getUserByToken接口获取登录用户！");
      AxiosUtil.post(CommonUtil.getAdminUrl()+"/getUserByToken",{token:TokenUtil.getToken()},function (result) {
        let data = result.data as Object;
        commit('SET_USER', new User(data.id,data.username));

        //设置到sessionStorage
        SessionStorageUtil.setItem("loginUser",thid.getters.getUser);
      });
    }
  },
  modules: {
  }
})
