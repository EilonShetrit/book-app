
import appHeader from './cmps/app-header.js';
import { myRouter } from './routes.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="book-app">
            <main>
                <app-header/>
                <router-view></router-view>
            </main>
        </section>
    `,
    components:{
        appHeader
    }
}

const app = new Vue(options);