import { requst } from "./requst";

export function getHomeMutildata(){
  return requst({
    // url:'/ACG?type=json&size=mw690',
    url:'/meinvtu?num=4'
  })
}
export function getHomeRecommend(){
  return requst({
    // url:'/ACG?type=json&size=mw690',
    url:'/meinvtu?num=4'
  })
}
export function getHomeGoods(){
  return requst({
    // url:'/ACG?type=json&size=mw690',
    url:'/meinvtu?num=10'
  })
}