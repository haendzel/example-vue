var app = new Vue ({

	el: '#app',
	data: {
		product: "Hoodie",
		brand: "NASA",
		link: 'https://filiphandzel.pl/cv',
		altText: "You must to buy it!",
		onSale: true,
		description: "Amazing hoodie for expedition to Mars!",
		details: ["65% cotton", "35% polyester", "Gender-neutral", "Hand wash only"],
		variants: [
	      {
	        variantId: 1,
	        variantColor: 'white',
	        variantImage: "./assets/img/white-nasa.jpg",
	        variantQuantify: 12,
	        variantSizeXS: 2,
	        variantSizeS: 6,
	        variantSizeM: 1,
	        variantSizeL: 3,
	        variantSizeXL: 0
	      },
	      {
	        variantId: 2,
	        variantColor: 'gray',
	        variantImage: "./assets/img/gray-nasa.jpg",
	        variantQuantify: 17
	        //variantSizeXS: 2
	        //variantSizeS: 6
	        //variantSizeM: 6
	        //variantSizeL: 3
	        //variantSizeXL: 0
	      },
	      {
	        variantId: 3,
	        variantColor: 'black',
	        variantImage: "./assets/img/black-nasa.jpg",
	        variantQuantify: 0
	        //variantSizeXS: 0
	        //variantSizeS: 0
	        //variantSizeM: 0
	        //variantSizeL: 0
	        //variantSizeXL: 0
	      },
	      {
	        variantId: 4,
	        variantColor: 'indigo',
	        variantImage: "./assets/img/violet-nasa.jpg",
	        variantQuantify: 20
	        //variantSizeXS: 2
	        //variantSizeS: 6
	        //variantSizeM: 9
	        //variantSizeL: 3
	        //variantSizeXL: 0
	      },
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