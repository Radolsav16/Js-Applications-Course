import page from '../node_modules/page/page.mjs'
import { html , render} from '../node_modules/lit-html/lit-html.js';
import { showHomePage } from './views/home.js';
import { middleWare } from './middewares/middleware.js';
import { showMarketView } from './views/market.js';
import { showSellView } from './views/sell.js';
import { showLogoutView } from './views/logout.js';
import { showLoginView } from './views/login.js';
import { showRegisterView } from './views/register.js';
import { showDetailsView } from './views/details.js';
import { showEditView } from './views/edit.js';
import { showDeleteView } from './views/delete.js';



page(middleWare)
page('/',showHomePage);
page('/market',showMarketView);
page('/market/:id',showDetailsView);
page('/sell',showSellView)
page('/logout',showLogoutView);
page('/login',showLoginView);
page('/register',showRegisterView);
page('/edit',showEditView);
page('/delete',showDeleteView);

page.start()