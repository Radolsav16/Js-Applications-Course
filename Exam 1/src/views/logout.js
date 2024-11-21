import page from "../../node_modules/page/page.mjs";
import { userHelper } from "../service/userService.js";


export function showLogoutView(){
    userHelper.clearUserData();
    page.redirect('/')
}