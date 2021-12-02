/*
 * @Author: zhy
 * @Date: 2021-11-22 19:52:19
 * @Description:
 * @LastEditTime: 2021-11-22 19:52:19
 */
import request from '@/utils/request';

export function getWeatherInfo() {
    return request({
        url: CONFIG.dix.getWeatherInfo,
        method: 'get',
    });
}
// 图表统一接口
export function getPartInfoApi(data) {
    return request({
        url: CONFIG.dix.partInfoApi,
        method: 'post',
        headers: {
            noToken: true,
        },
        data,
    });
}
