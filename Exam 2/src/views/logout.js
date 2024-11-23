import page  from "../../node_modules/page/page.mjs";
import { UserPoints } from "../service/endpoints.js";
import { api } from "../service/requester.js";
import { removeUserInfo } from "../service/userService.js";

export async function logout(){
    const data = await api.get(UserPoints.logout);
    removeUserInfo();
    page.redirect('/')
}