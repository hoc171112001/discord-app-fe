import axiosClient from '.';
import { LOGIN_URL } from '@constants/index';
import { DataLogin } from '@constants/models';

const authApi = {
  login(data: DataLogin) {
    const url = LOGIN_URL;
    return axiosClient.post(url, data);
  },
};
export default authApi;
