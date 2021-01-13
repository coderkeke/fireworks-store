import request from "@/utils/request";

// 条件查询文件
export function getFileList(params) {
  return request({
    url: "/web/v1/upload/centerOptionFile/appData/getFileList",
    method: "get",
    params
  });
}
