// import userMsg from './user-msg.js'
export default {
    template: `
        <section class="app-header">
            <h1>Welcome to my book app</h1>
            <nav>
                <router-link to="/" exact>Home</router-link>|
                <router-link to="/book" exact>Book App</router-link>|
                <router-link to="/about">About Us</router-link>
            </nav>
        </section>
    `,
    components:{
        // userMsg
    }
}
