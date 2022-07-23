import { clearAccessToken, saveAccessToken } from "@/helper/local-storage.helper";
import { baseApiService } from "./base-api";

const apiService = new baseApiService();

export function login(body: any) {
  apiService.post('/login', body).then((res: any) => {
    saveAccessToken(res.accessToken);
  })
};

export function logout() {
  apiService.post('/logout', {}).then(() => {
    clearAccessToken();
  })
}