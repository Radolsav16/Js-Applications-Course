import page from '../node_modules/page/page.mjs'
import { initNavigation } from './middlewares/header.js'
import { createPageView } from './views/create.js'
import { dashboardPageView } from './views/dashboard.js'
import { deleteDrone } from './views/delete.js'
import { detailsPageView } from './views/details.js'
import { editPageView } from './views/edit.js'
import { homePageView } from './views/home.js'
import { loginPageView } from './views/login.js'
import { logout } from './views/logout.js'
import { registerPageView } from './views/register.js'


page(initNavigation)
page('/',homePageView)
page('/dashboard',dashboardPageView);
page('/register',registerPageView)
page('/login',loginPageView);
page('/logout',logout)
page('/create',createPageView);
page('/details/:id',detailsPageView)
page('/delete',deleteDrone)
page('/edit',editPageView)


page.start();