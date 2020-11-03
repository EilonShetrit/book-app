import { bookService } from '../service/bookService.js'
import bookList from '../cmps/book-list.js'
import bookFilter from '../cmps/book-filter.js'

export default {
    template: `
    <section class="books-section">
    <book-filter @filtered="setFilter"></book-filter>
    <book-list v-if="showBookList" :books="booksToShow" @selected="selectBook"></book-list>
    </section>`
    ,
    data() {
        return {
            books: [],
            filterBy: null,
            showBookList: true,
            showBookDetails: false
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        selectBook(bookId) {
            this.selctedBookId = bookId;
            this.showBookDetails = true;
            this.showBookList = false;
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.byName.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt)).filter(book => book.listPrice.amount > this.filterBy.fromPrice).filter(book => book.listPrice.amount < this.filterBy.toPrice)
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    },
    components: {
        bookList,
        bookFilter
    }
}

