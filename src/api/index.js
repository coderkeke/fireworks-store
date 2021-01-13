import request from "@/utils/request";

// 条件查询文件
export function getFileList(params) {
  return request({
    url: "/web/v1/upload/centerOptionFile/appData/getFileList",
    method: "get",
    params
  });
}

// 获取产品类型列表
export function getProTypeList(params) {
  return request({
    url: "/web/v1/prt/productType/appData/getList",
    method: "get",
    params
  });
}

// 获取产品列表
export function getProList(params) {
  return request({
    url: "/web/v1/prt/product/appData/getList",
    method: "get",
    params
  });
}

// 获取单个产品
export function getProOne(params) {
  return request({
    url: "/web/v1/prt/product/appData/getOne",
    method: "post",
    params
  });
}
