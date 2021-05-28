
var app = new Vue({
    el: '#app',
    data:{
        alo: 'red',
        produto : 'meia',
        descricao: ['80% algodao', '20% poliester', 'quentinho'],
        image1: '/home/caputo/Documentos/programing/Aprendendo HTML CSS/Vue/images/socks_blue.jpg',
        link1: 'https://www.google.com/',
        quantidade: true,
        variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: 'images/socks_green.jpg'
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'images/socks_blue.jpg'
            }
        ],
        cart: 0,
        image2: 'carrousel/1.jpg',
        count: 0
    },

    methods: {
        addToCart() {
            console.log(this.variants[0])
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image1 = variantImage
        }
    }
})

