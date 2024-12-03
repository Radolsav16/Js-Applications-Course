import page from '../node_modules/page/page.mjs';
import { homePageView } from './views/home.js';
import { initNavigation } from './middewares/header.js';
import { loginPageView } from './views/login.js';
import { registerPageView } from './views/register.js';
import { logout } from './views/logut.js';
import { createPageView } from './views/create.js';
import { dashboardPageView } from './views/dashboard.js';
import { detailsPageView } from './views/details.js';
import { editPageView } from './views/edit.js';
import { deleteView } from './views/delete.js';

page(initNavigation)
page('/',homePageView);
page('/login',loginPageView)
page('/register',registerPageView)
page('/logout',logout);
page('/create',createPageView);
page('/dashboard',dashboardPageView);
page('/details/:id',detailsPageView)
page('/edit',editPageView)
page('/delete',deleteView)

page.start();