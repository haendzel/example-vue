Vue.component('product', {
	template:`
	<div class="product">
		<div class="product">

	<div class="product-image">
		<img v-bind:src="image" v-bind:alt="altText"/>
	</div>

	<div class="product-info">
		<h1>
			{{ title }}
		</h1>
		<h2>{{ price }}</h2>
		<h4 v-show="onSale"><p>On sale!</p></h4>
		<p v-if="inStock">In Stock</p>
		<p v-else
		:disabled="!inStock"
		:class="{ OutOfStock: !inStock }">Out of Stock</p>
		<p>{{ description }}</p>
		<p>Shipping: {{ shipping }}</p>
		<ul>
			<li v-for="detail in details">{{ detail }}</li>
		</ul>

		 <div class="color-box"
		 v-for="(variant, index) in variants" 
		 :key="variant.variantId"
		 :style="{ backgroundColor: variant.variantColor }"
		 @mouseover="updateProduct(index)">
      	</div>

		<button v-on:click="addToCart"
		:disabled="!inStock"
		:class="{ disabledButton: !inStock }"
		>Add to cart
		</button>

		<button v-on:click="RemoveFromCart"
		:disabled="!inStock"
		:class="{ disabledButton: !inStock }"
		>Remove from cart
	    </button>

		<div class="cart">
			<p>Cart ({{ cart }})</p>
		</div>
		
	</div>
</div>
	</div>
	`,
	data(){
		return {
		product: "Hoodie",
		brand: "NASA",
		price: "129.90 PLN",
		link: 'https://filiphandzel.pl/cv',
		altText: "You must to buy it!",
		onSale: false,
		shipping: "14.90 PLN",
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
		}
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

var app = new Vue ({
	el: '#app'
})