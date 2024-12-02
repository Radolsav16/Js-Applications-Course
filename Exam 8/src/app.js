import page from '../node_modules/page/page.mjs';
import { iniNavigation } from './middlewares/header.js';
import { createPageView } from './views/create.js';
import { dashboardPageView } from './views/dashboard.js';
import { deleteView } from './views/delete.js';
import { detailsPageView } from './views/details.js';
import { editPageView } from './views/edit.js';
import { homePageView } from './views/home.js';
import { loginPageView } from './views/login.js';
import { logout } from './views/logout.js';
import { registerPageView } from './views/register.js';
import { searchPageView } from './views/search.js';


page(iniNavigation)
page('/',homePageView)
page('/login',loginPageView)
page('/register',registerPageView);
page('/logout',logout);
page('/dashboard',dashboardPageView)
page('/create',createPageView)
page('/details/:id',detailsPageView)
page('/edit',editPageView)
page('/delete',deleteView)
page('/search',searchPageView)

page.start();