import page from '../node_modules/page/page.mjs'
import { initNavigation } from './middewares/navigation.js'
import { createPageView } from './views/create.js'
import { dashboardPageView } from './views/dashboard.js'
import { deletePageView } from './views/delete.js'
import { detailsPageView } from './views/details.js'
import { EditPageView } from './views/edit.js'
import { homePageView } from './views/home.js'
import { loginPageView } from './views/login.js'
import { logout } from './views/logout.js'
import { RegisterPageView } from './views/register.js'

page(initNavigation)
page('/',homePageView)
page('/dashboard',dashboardPageView);
page('/login',loginPageView)
page('/logout',logout)
page('/register',RegisterPageView);
page('/create',createPageView)
page('/details/:id',detailsPageView)
page('/edit',EditPageView)
page('/delete',deletePageView);


page.start()