import type { AxiosResponse } from "axios";
import type { UserType } from "../types/Types";
import axios from "../config/AxiosConfig";

class LoginPageService {

    login(): Promise<UserType[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.get("/users")
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error));
        })
    }
}

export default new LoginPageService();