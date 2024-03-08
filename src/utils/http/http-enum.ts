/**
 * 请求结果返回码
 */
export enum ResultEnum {
    SUCCESS = 200,
    ERROR = -1,
    NO_AUTH = 401,
    NO_PACKAGE = 307,
    NO_PERMISSION = 403
}

/**
 * 请求方法
 */

export enum RequestTypeEnum {
    // 获取
    GET = 'GET',
    // 发送post请求
    POST = 'POST',
    // 发送put请求
    PUT = 'PUT',
    // 发送delete请求
    DELETE = 'DELETE',
    // 发送patch请求
    PATCH = 'PATCH'
}

export enum ContentTypeEnum {
    // JSON
    JSON = 'application/json;charset=UTF-8',
    // Text
    Text = 'text/plain;charset=UTF-8',
    // form-data 上传
    FORM_DATA = 'application/x-www-form-urlencoded',
    // 文件上传
    FORM_UPLOAD = 'multipart/form-data',
    // form-data 一般配合qs
    FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8'
}
