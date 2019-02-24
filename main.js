var app = new Vue ({

	el: '#app',
	data: {
		product: "Socks",
		brand: "Vue Mastery",
		link: 'https://filiphandzel.pl/cv',
		altText: "Amazing Socks!",
		onSale: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
	      {
	        variantId: 2234,
	        variantColor: 'green',
	        variantImage: "./assets/img/socks-green.jpg",
	        variantQuantify: 12    
	      },
	      {
	        variantId: 2235,
	        variantColor: 'blue',
	        variantImage: "./assets/img/socks-blue.jpg",
	        variantQuantify: 0
	      }
	    ],
	    cart: 0,
	    selectedVariant: 0,
	    },
	    methods: {
	    	addToCart: function() {
	    		this.cart += 1
	    	},
	    	RemoveFromCart: function() {
	    		this.cart -= 1
	    	},
	    	updateProduct: function(index) {
      		this.selectedVariant = index
    		}
	    },
	    computed: {
	    	title() {
	    		return this.brand + ' ' + this.product
	    	},
	    	image(){
            	return this.variants[this.selectedVariant].variantImage
        	},
	    	inStock(){
	    		return this.variants[this.selectedVariant].variantQuantify
	    	}
	    }

})