import page from '../node_modules/page/page.mjs'
import { initNav } from './middlewares/header.js';
import { createPageView } from './views/create.js';
import { dashboardPageView } from './views/dashboard.js';
import { deletePageView } from './views/delete.js';
import { detailsPageView } from './views/details.js';
import { editPageView } from './views/edit.js';
import { homePageView } from './views/home.js';
import { LoginPageView } from './views/login.js';
import { logout } from './views/logout.js';
import { registerPageView } from './views/register.js';


page(initNav)
page('/',homePageView);
page('/register',registerPageView)
page('/logout',logout)
page('/login',LoginPageView)
page('/dashboard',dashboardPageView)
page('/create',createPageView)
page('/details/:id',detailsPageView);
page('/edit',editPageView)
page('/delete',deletePageView)
page.start();