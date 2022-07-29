import axiosClient from '.';

export const mainApi = {
  postData(url: string, data: any) {
    return axiosClient.post(url, data);
  },
  getAll(url: string, params: any) {
    return axiosClient.get(url, { params });
  },
  getById(url: string, id: string) {
    return axiosClient.get(url);
  },
  create(url: string, data: any) {
    return axiosClient.post(url, data);
  },
  edit(url: string, id: string, data: any) {
    return axiosClient.put(url, data);
  },
  delete(url: string, id: string) {
    return axiosClient.delete(url);
  },
};
