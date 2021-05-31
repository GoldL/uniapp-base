import { baseUrl } from '@/config'

let preUrl = baseUrl + '/'
// #ifdef H5
preUrl = '/api/'
// #endif

// 登陆
export const loginUrl = preUrl + 'blade-auth/oauth/token'
// 字典
export const dictUrl = preUrl + 'blade-system/dict-biz/list'
// 上传
export const putFileUrl = preUrl + 'blade-resource/oss/endpoint/put-file'