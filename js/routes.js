import bookApp from './pages/book-app.js';
import homePage from './pages/home-page.js';
import bookDetails from './pages/book-details.js';
import bookAbout from './pages/book-about.js';


const routes = [
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/about',
        component: bookAbout
    }
]

export const myRouter = new VueRouter({ routes })
