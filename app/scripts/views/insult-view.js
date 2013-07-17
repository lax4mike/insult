/*global insult, Backbone, JST*/

insult.Views.InsultView = Backbone.View.extend({

  	// make sure you pass in the model and el to the view
    // eg. new InsultView({ el: $("#insult"), model: insultModel });
    initialize: function(){
	
        // when the model fires the 'refresh' event, call this.render
        this.listenTo(this.model, 'refresh', this.render);

        this.$insultText = $($(this.el).find("#insult"));
        this.$card = $($(this.el).find(".card"));

        // render initially
        this.render();
    },

    // usuing handlebars for the template.  
    template: Handlebars.compile($("#insult-template").html()),

    render: function(){
        
        var time = 500; // make sure timeout is the same as .card in css

        // do flip animation
        this.$card.addClass('flip');

        // once the flip animation is done...
        setTimeout(function(){
            // set the html to the template rendered with the model as context.
            this.$insultText.html( this.template(this.model) );
            this.$card.removeClass('flip');
        }.bind(this), time); 
       
        
    }
});
