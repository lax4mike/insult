/*global insult, Backbone*/

insult.Models.InsultModel = Backbone.Model.extend({

	// words holds all the words that we loaded in from words.json, this doesn't change
	// word1-3 get changed to a random word on refresh
	defaults: {
		words: [[],[],[]],
		word1: "",
		word2: "",
		word3: ""
	},

	initialize: function(){
		// change:words is fired when the words get set/changed
		this.on('change:words', this.refresh);
	},

	refresh: function(){
		
		// get random words from this.words and put them in word1-3
		w = this.get('words');
		this.word1 = w[0][Math.floor(Math.random()*w[0].length)];
		this.word2 = w[1][Math.floor(Math.random()*w[1].length)];
		this.word3 = w[2][Math.floor(Math.random()*w[2].length)];

		// let everyone else know we've refresh (the view)
		this.trigger("refresh");
	}
});
