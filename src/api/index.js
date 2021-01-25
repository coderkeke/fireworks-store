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

// 获取微信二维码
export function getQrCode(params) {
  return request({
    url: "/app/WeChat/getQrCode",
    method: "get",
    params
  });
}

export function scanCode(params) {
  return request({
    url: "/app/WeChat/scanCode",
    method: "get",
    params
  });
}

// 获取/视频/图文/日常《公众号 调用的接口》
export function getSharingSpace(params) {
  return request({
    url: "/web/v1/ShopPicVideo/appData/getList",
    method: "get",
    params
  });
}

// 喜欢列表
export function getCollList(params) {
  return request({
    url: "/web/v1/prt/product/appData/getCollList",
    method: "get",
    params
  });
}

//足迹
export function getFootprint(params) {
  return request({
    url: "/web/v1/prt/product/appData/getFootprint",
    method: "get",
    params
  });
}
// 删除喜欢
export function reCollection(params) {
  return request({
    url: "/web/v1/prt/product/appData/reCollection",
    method: "POST",
    params
  });
}

// 收藏喜欢
export function collection(params) {
  return request({
    url: "/web/v1/prt/product/appData/collection",
    method: "POST",
    params
  });
}
