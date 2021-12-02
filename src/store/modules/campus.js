/*
 * @Author: zhy
 * @Date: 2021-11-22 18:49:06
 * @Description:
 * @LastEditTime: 2021-11-22 19:00:06
 */
/* eslint-env es6 */
const state = {
    name: 'home',
};

const mutations = {
    CHANGE_SETTING: (states, data) => {
        states.name = data;
    },
};

const actions = {
    changeSetting({ commit }, data) {
        commit('CHANGE_SETTING', data);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
