import page from '../node_modules/page/page.mjs';
import { createPageView } from './views/create.js';
import { dashboardPageView } from './views/dashboard.js';
import { deletePageView } from './views/delete.js';
import { detailsPageView } from './views/details.js';
import { showEditPage } from './views/edit.js';
import { homePageView } from './views/home.js';
import { loginPageView } from './views/login.js';
import { logout } from './views/logout.js';
import { initNav } from './views/nav.js';
import { registerPageView } from './views/register.js';


page(initNav);
page('/',homePageView)
page('/login',loginPageView)
page('/register',registerPageView);
page('/logout',logout);
page('/dashboard',dashboardPageView);
page('/details/:id',detailsPageView);
page('/create',createPageView)
page('/edit',showEditPage);
page('/delete',deletePageView);

page.start();