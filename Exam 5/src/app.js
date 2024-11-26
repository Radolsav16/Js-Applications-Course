import page from '../node_modules/page/page.mjs'
import { createPageView } from './views/create.js';
import { dashBoardPageView } from './views/dashboard.js';
import { deleteCar } from './views/delete.js';
import { detailsPageView } from './views/details.js';
import { editPageView } from './views/edit.js';
import { homePageView } from './views/homeView.js'
import { LoginPageView } from './views/login.js';
import { logout } from './views/logout.js';
import { initNav } from './views/navigation.js';
import { registerPageView } from './views/register.js';

page(initNav)
page('/',homePageView);
page('/register',registerPageView)
page('/login',LoginPageView)
page('/logout',logout)
page('/dashboard',dashBoardPageView)
page('/details/:id',detailsPageView)
page('/edit',editPageView);
page('/create',createPageView)
page('/delete',deleteCar)

page.start();