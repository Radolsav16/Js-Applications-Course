import page from '../node_modules/page/page.mjs'
import { initNavigation } from './middewares/navigation.js'
import { dashboardPageView } from './views/dashboard.js'
import { homePageView } from './views/home.js'

page(initNavigation)
page('/',homePageView)
page('/dashboard',dashboardPageView)


page.start()