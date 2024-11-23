import page from "../node_modules/page/page.mjs";
import { createTattooPageView } from "./views/create.js";
import { dashboardPageView } from "./views/dashboard.js";
import { deleteViewPage } from "./views/delete.js";
import { detailsPageView } from "./views/details.js";
import { editPageView } from "./views/edit.js";
import { homePageView } from "./views/home.js";
import { loginPageView } from "./views/login.js";
import { logout } from "./views/logout.js";
import { navigation } from "./views/navigation.js";
import { registerPageView } from "./views/register.js";



page(navigation)
page('/',homePageView);
page('/login',loginPageView)
page('/register',registerPageView)
page('/dashboard',dashboardPageView)
page('/logout',logout)
page('/details/:id',detailsPageView)
page('/create',createTattooPageView)
page('/edit',editPageView);
page('/delete',deleteViewPage);

page.start();