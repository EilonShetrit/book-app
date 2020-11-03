
export default {
    template: `
        <section class="book-filter">
            <h2>Filter those books</h2>
            <input type="text" v-model="filterBy.byName" placeholder="Search by name.." @input="emitFilter" />
            <input type="number" v-model.number="filterBy.fromPrice" placeholder="Search from price.." @input="emitFilter" />
            <input type="number" v-model.number="filterBy.toPrice" placeholder="Search to price.." @input="emitFilter" />
        </section>
    `,
    data() {
        return {
            filterBy: { byName: '', fromPrice: 0, toPrice: Infinity }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', {...this.filterBy});
        }
    },
    computed: {

    }
}
