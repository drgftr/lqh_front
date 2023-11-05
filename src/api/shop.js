import request from "@/utils/request";

export function registerShop(data) {
  return request({
    url: '/api/shop/register',
    method: 'post',
    data
  })
}

export function list(params) {
  return request({
    url: '/api/shop/list',
    method: 'get',
    params
  })
}



export function outShop(params) {
  return request({
    url: '/api/shop/out',
    method: 'post',
    params
  })
}

export function deleteShop(data) {
  return request({
    url: '/api/shop/delete',
    method: 'post',
    data
  })
}

export function updateShop(data) {
  return request({
    url: '/api/shop/edit',
    method: 'post',
    data
  })
}
