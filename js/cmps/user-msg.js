import { eventBus, EVENT_SHOW_MSG } from '../service/event-bus-service.js'


export default {
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg}}</p>
            <button @click="msg=null">x</button>
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on(EVENT_SHOW_MSG, msg => {
            this.msg = msg;
            setTimeout(()=>{
                this.msg = null;
            }, 2000)
        })
    }
}