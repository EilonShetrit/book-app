import { bookService } from '../service/bookService.js'
import reviewAdd  from '../cmps/review-add.js'

export default {
    template: `
        <section class="flex" >
            <div class="book-details" v-if="currBook">
                <img class="details-img" :src="currBook.thumbnail" />
                <h4>Book title: {{currBook.title}}</h4>
                <h5>Price: {{currBook.listPrice.amount}} {{onBookPrice}}</h5>
                <h5>Authors: {{getAuthors}}</h5>
                <h5>published Date: {{bookPubStatus}}</h5>
                <h5>Language: {{langPrev}}</h5>
                <h5>Page amount: {{currBook.pageCount}} - {{getPageCount}}</h5>
                <h5 v-if="currBook.listPrice.isOnSale">On Sale!!!</h5>
                <div class="short-description" v-if="!showLongDesc">Description: {{shortDesc}} <a @click="toggleDesc" href="#">Read More..</a></div>
                <div class="long-description" v-if="showLongDesc">Description: {{currBook.description}} <a @click="toggleDesc" href="#">Show Less..</a></div>
            </div>
            <div class="review-container">
                <review-add/>
            </div>

        </section>
    `,
    data() {
        return {
            currBook: null,

            showLongDesc: false
        }
    },
    methods: {
        toggleDesc() {
            this.showLongDesc = !this.showLongDesc
        }
    },
    computed: {
        onBookPrice() {
            var currencyIcon = '';
            var currency = this.currBook.listPrice.currencyCode
            if (currency === 'EUR') currencyIcon = '€';
            else if (currency === 'ILS') currencyIcon = '₪';
            else if (currency === 'USD') currencyIcon = '$';
            currency = currencyIcon;
            return currency;
        },
        getAuthors() {
            return this.currBook.authors.join(',')
        },
        getPageCount() {
            if (this.currBook.pageCount > 500) return 'Long reading';
            else if (this.currBook.pageCount > 100 && this.currBook.pageCount < 500) return 'Decent Reading';
            else if (this.currBook.pageCount <= 100) return 'Light Reading';
        },
        bookPubStatus() {
            if (this.currBook.publishedDate <= 2010) return `${this.currBook.publishedDate} - Veteran Book`;
            if (this.currBook.publishedDate >= 2019) return `${this.currBook.publishedDate} - New!`;
            else return this.currBook.publishedDate
        },
        langPrev() {
            if (this.currBook.language === 'he') return `Hebrew`;
            if (this.currBook.language === 'en') return `English`;
            if (this.currBook.language === 'sp') return `Spanish`;
        },
        shortDesc() {
            return this.currBook.description.substring(0, 100);
        }
    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getBookById(id)
            .then(book => this.currBook = book);
    },
    components:{
        reviewAdd
    }
}

