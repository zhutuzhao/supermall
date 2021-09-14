import { requst } from "./requst";

export function getHomeMutildata(){
  return requst({
    // url:'/ACG?type=json&size=mw690',
    url:'/meinvtu?num=4'
  })
}