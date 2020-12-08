import request from '../util/request'

// 获取课程
export function getCourseList (params: any) {
  return request({
    url: '/api/courseList',
    method: 'get',
    params
  })
}

// 添加课程 
export function addCourse (params: object) {
    return request({
      url: '/api/course/add',
      method: 'post',
      data: params
    })
  }

// 获取全部分类 
export function getCourseType () {
    return request({
      url: '/api/dictionary/type',
      method: 'get'
    })
  }

// 删除课程
export function deleteCourse (params: object) {
    return request({
      url: '/api/course/delete',
      method: 'delete',
      params
    })
  }


  // 获取课程详细 
  export function getEditCourse (params: object) {
    return request({
      url: '/api/course/editCourse',
      method: 'get',
      params
    })
  }

    // 修改课程 
    export function editCourse (params: object) {
        return request({
          url: '/api/course/edit',
          method: 'post',
          data: params
        })
      }
    
