import request from '@/utils/http'

/**
 * 获取天气
 * @param code 城市code编码
 * @returns
 */
export const getWeather = (code?: number) => {
    return request.request(
        {
            url: 'weatherApi/api',
            params: {
                unescape: 1,
                version: 'v6.1',
                appid: 59631454,
                appsecret: '2VHuNqI0',
                adcode: code || '320115000000'
            }
        },
        {
            isTransformRequestResult: false,
            isShowServerErrorMessage: false
        }
    )
}
