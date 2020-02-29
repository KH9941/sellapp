import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000'
let req=axios.create({
    baseURL:'http://192.168.1.7:3000',
    timeout:10000
})
//请求商家信息 
export function getGoods(){
    return req.get('/api/seller')
}
//请求评论信息
export function getRating(){
    return req.get('/api/ratings')
}
//请求评论信息
export function getGooods(){
    return req.get('/api/goods')
}