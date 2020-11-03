import bookPreview from './book-preview.js'

export default {
    props: ['books'],
    template: `
    <section class="book-list">
            <h2 class="book-title">Our Books</h2>
            <ul class="books-container flex clean-list">
                <li v-for="currBook in books" :key="currBook.id" >
                   <book-preview :book="currBook" @click.native="emitBookSelected(currBook.id)" />
                </li>
            </ul>
        </section>`
    ,
    methods: {
        emitBookSelected(bookId) {
            console.log('OK', bookId);
            this.$emit('selected', bookId)
            this.$router.push(`/book/${bookId}`)
        },
    },
    components:{
        bookPreview
    }
}

