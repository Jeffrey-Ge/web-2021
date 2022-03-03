import { Module } from 'vuex';
import { RoutesListState, RootStateTypes } from 'store/interface/index';
import { AppRouteRecordRaw } from '../interface/index'
const routesListModule: Module<RoutesListState, RootStateTypes> = {
	namespaced: true,
	state: {
		routesList: [
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'iconfont el-icon-menu',
          isAffix: true,
          isHide: false,
          isKeepAlive: true,
          title: '首页',
          index: '1'
        },
        name: 'home',
        path: '/home'
      },
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'iconfont el-icon-menu',
          isAffix: true,
          isHide: false,
          isKeepAlive: true,
          title: '数据报送',
          index: '2'
        },
        name: 'dataTransmit',
        path: '/dataTransmit',
        children: [
          {
            meta: {
              auth: ['admin', 'test'],
              icon: '',
              isAffix: false,
              isHide: false,
              isKeepAlive: true,
              title: '列表',
              index: '3'
            },
            name: 'dataTransmitList',
            path: '/dataTransmit/list'
          }
        ]
      },
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'iconfont el-icon-s-grid',
          isAffix: false,
          isHide: false,
          isKeepAlive: true,
          title: 'elementIcon',
          index: '4'
        },
        name: 'elementIcon',
        path: '/elementIcon'
      }
    ],
	},
	mutations: {
		// 设置路由，菜单中使用到
		getRoutesList(state: any, data: Array<AppRouteRecordRaw>) {
			state.routesList = data;
		},
	},
	actions: {
		// 设置路由，菜单中使用到
		async setRoutesList({ commit }, data:Array<AppRouteRecordRaw>) {
			commit('getRoutesList', data);
		},
	},
};

export default routesListModule;
