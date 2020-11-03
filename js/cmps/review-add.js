import { bookService } from '../service/bookService.js'
import { utilService } from '../service/utils-service.js'
import { eventBus, EVENT_SHOW_MSG } from '../service/event-bus-service.js'

export default {
    template: `
        <section class="review-container">
            <form @submit.prevent="submitReview">
                <label>
                    <input ref="inputName" type="text" v-model="reviewName" placeholder="name..">
                </label>
                <h4>Rate:</h4>
                <div class="rate-section">
                    <select v-model="rating">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="readDate">
                    <h3>Read at:</h3>
                    <input v-model="readDate" type="date">
                </div>
                <textarea name="reader-note" id="reader-note" v-model="reviewTxt" cols="10" rows="10" placeholder="Anything you want to add.."></textarea>
                <button>Add</button>
            </form>

            <button @click="toggleShowReviews"><h2><span v-if="!isShowReviews">Show reviews</span><span v-if="isShowReviews">Close reviews</span></h2></button>
            <div v-show="isShowReviews" class="reviews">
                <ul>
                    <li v-for="review in book.reviews" :key="review.id">
                        <h3>{{review.reviewerName}}</h3>
                        <h3>rate</h3>
                        <h4>{{review.rate}}</h4>
                        <h3>Read At: {{review.readDate}}</h3>
                        <p>{{review.reviewTxt}}</p>
                        <button @click="deleteReview(review.id)">X</button>
                    </li>
                </ul>
            </div>
        </section>
    `,
    data() {
        return {
            reviewName: 'Books Reader',
            book: {},
            rating: 1,
            readDate: '2020/11/02',
            reviewTxt: '',
            isShowReviews: false
        }
    },
    methods: {
        submitReview() {
            const review = {
                reviewerName: this.reviewName,
                id: utilService.makeId(),
                rate: this.rating,
                readDate: this.readDate,
                reviewTxt: this.reviewTxt || ''
            }
            bookService.addReview(this.book.id, review)
                .then(eventBus.$emit('show-msg-add', 'Review added successfully')) //fix

        },
        deleteReview(reviewId) {
            bookService.removeReview(reviewId, this.book.id)
                .then(res => {
                    console.log('res', res);
                    eventBus.$emit(EVENT_SHOW_MSG, 'Review Deleted') //fix
                })
        },
        toggleShowReviews() {
            this.isShowReviews = !this.isShowReviews;
        }
    },
    computed: {


    },
    created() {
        const id = this.$route.params.bookId;
        bookService.getBookById(id)
            .then(book => this.book = book);

    },
    mounted() {
        // console.log(this.$refs);
        this.$refs.inputName.focus();
    }
}
