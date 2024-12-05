import page from '../node_modules/page/page.mjs';
import { initNavigation } from './middlewares/header.js';
import { createPageView } from './views/create.js';
import { dashboardPageView } from './views/dashboard.js';
import { deleteCard } from './views/delete.js';
import { detailPageView } from './views/details.js';
import { editPageView } from './views/edit.js';
import { homePageView } from './views/home.js';
import { loginPageView } from './views/login.js';
import { logout } from './views/logout.js';
import { registerPageView } from './views/register.js';


page(initNavigation)
page('/',homePageView)
page('/login',loginPageView)
page('/register',registerPageView)
page('/logout',logout)
page('/dashboard',dashboardPageView)
page('/create',createPageView)
page('/details/:id',detailPageView)
page('/edit',editPageView);
page('/delete',deleteCard)
page.start();