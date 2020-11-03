export default {
    props:['book'],
    template: `
        <section class="book-preview">
           <h3>{{book.title}}</h3>
           <img :src="book.thumbnail" />
           <h4>Price: {{book.listPrice.amount}} {{getCurrency}}</h4>
        </section>
    `,
    methods:{

    },
    computed: {
       getCurrency(){
           if(this.book.listPrice.currencyCode === 'EUR') return '€'
           else if(this.book.listPrice.currencyCode === 'USD') return '$'
           else return '₪'
       }
    }
}
