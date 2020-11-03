import { bookService } from '../../service/bookService.js'

export default {
    template: `
        <section class="add-book">
            <h2>Add book</h2>
            <input type="text" v-model="filterBy.byName" placeholder="Search for a book.." @input="emitFilter" />

        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: { byName: '' }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', { ...this.filterBy });
        }
    },
    computed: {
    },
    created() {
        bookService.getGoogleBooks()
            .then(books => this.books = books)
    },
    mounted() {
        
    }
}