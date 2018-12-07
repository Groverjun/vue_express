export const ERR_OK = 200

export const TIMEOUT = 60000

export const STATUS = 'status'    // 后台返回的状态码，如 code status 这些

export const baseURL = {
// dev: '',
   dev: 'http://localhost:3000',
// dev: '/apis',
}
/***
 * 开启前端代理需要更改config目录下的 index.js  
 * 打开 ‘/apis’
 * */