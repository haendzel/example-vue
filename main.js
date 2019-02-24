var app = new Vue ({

	el: '#app',
	data: {
		product: "Socks",
		firstName: "Filip",
		lastName: "Handzel",
		image: "./assets/img/socks-green.jpg",
		link: 'https://filiphandzel.pl/cv',
		altText: "Amazing Socks!",
		inventory: 8,
		onSale: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
	      {
	        variantId: 2234,
	        variantColor: 'green',
	        variantImage: "./assets/img/socks-green.jpg"    
	      },
	      {
	        variantId: 2235,
	        variantColor: 'blue',
	        variantImage: "./assets/img/socks-blue.jpg"
	      }
	    ],
	    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
	    cart: 0,
	    },
	    methods: {
	    	addToCart() {
	    		this.cart += 1
	    	},
	    	updateProduct(variantImage) {
      		this.image = variantImage
    		}
	    }
})