export default {
    template: `
    <section @click="showRef">
        <h1 ref="theTitle">Home Sweet Home</h1>
    </section>
    `,
    methods: {
        showRef() {
            console.log(this.$refs, 'ze2');
        }
    },
    mounted() {
        console.log(this.$refs.theTitle, 'IN MOUNTED');
    },
    created() {
        console.log(this.$refs.theTitle, 'IN CREATED');
    },

}