import {html, render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { showLoginView } from './views/login.js'
import { showLogoutView } from './views/logout.js'
import { showMarketView } from './views/market.js'
import { showRegisterView } from './views/register.js'
import { showSellView } from './views/sell.js'
import { showHome } from './views/home.js'
import { initNavigation } from './middewares/middleware.js'


page(initNavigation);
page('/',showHome);
page('/market',showMarketView);
page('/sell',showSellView);
page('/logout',showLogoutView);
page('/login',showLoginView);
page('/register',showRegisterView);

page.start();