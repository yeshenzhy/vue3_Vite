/*
 * @Author: zhy
 * @Date: 2021-11-22 18:31:11
 * @Description:
 * @LastEditTime: 2021-11-30 20:55:02
 */
import { createStore, createLogger } from 'vuex';
import campus from './modules/campus';

const debug = import.meta.env.MODE !== 'production';
const plugins = debug ? [createLogger({})] : [];
export default createStore({
    plugins,
    modules: {
        campus,
    },
});
