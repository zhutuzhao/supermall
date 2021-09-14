import axios from "axios"

export function requst(config) {
  const instance = axios.create({
    baseURL:'https://api.muxiaoguo.cn/api',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })
  instance.interceptors.response.use(res=>{
    return res
  },err=>{
    console.log(err);
  })
  return instance(config)
}
