import request from '@/utils/request'

export function list() {
  return request({
    url: '/api/department/tree',
    method: 'get'
  })
}


export function crateDepartment() {
    return request({
      url: '/api/department/add',
      method: 'post'
    })
}
