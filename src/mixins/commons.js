import currency from "currency.js"

export default {
    methods: {
        totalPrice(books) {
            let totalPrice = currency(0.0)
            for (const book of books) {
                totalPrice = totalPrice.add(book.price)
            }
            return totalPrice
        }
    }
}