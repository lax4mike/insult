/*global insult, Backbone, JST*/

insult.Views.InsultView = Backbone.View.extend({

  	// make sure you pass in the model and el to the view
    // eg. new InsultView({ el: $("#insult"), model: insultModel });
    initialize: function(){
	
        // when the model fires the 'refresh' event, call this.prerender
        this.listenTo(this.model, 'refresh', this.prerender);

        this.$insultText = $($(this.el).find("#insult"));
        this.$card = $($(this.el).find(".card"));

        // prerender initially
        this.prerender();
        this.render();
    },

    // usuing handlebars for the template.  
    template: Handlebars.compile($("#insult-template").html()),

    // render the template ahead of time so it's faster getting into the card
    rendered: "",  

    prerender: function(){
        this.rendered = this.template(this.model);
    },  

    render: function(){
        var time = 1600; // make sure timeout is the same as .card in css

        // do flip animation
        this.$card.addClass('flip');
        

        // once the flip animation is done...
        setTimeout(function(){
            // set the html to the template rendered with the model as context.
            this.$insultText.html( this.rendered );
        }.bind(this), time/3); 

        setTimeout(function(){
            this.$card.removeClass('flip');

            // generate next insult so it's fast to load next time the card flips
            this.model.refresh();
        }.bind(this), time);
       
           
    }
});
