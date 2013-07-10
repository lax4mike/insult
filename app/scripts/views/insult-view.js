/*global insult, Backbone, JST*/

insult.Views.InsultView = Backbone.View.extend({

  	// make sure you pass in the model and el to the view
    // eg. new InsultView({ el: $("#insult"), model: insultModel });
    initialize: function(){
	
        // when the model fires the 'refresh' event, call this.render
        this.listenTo(this.model, 'refresh', this.render);

        // render initially
        this.render();
    },

    // usuing handlebars for the template.  
    template: Handlebars.compile($("#insult-template").html()),

    render: function(){
        // this.$el is the DOM element wrapped in jQuery.
        // set the html to the template rendered with the model as context.
        this.$el.html( this.template(this.model) );
    }
});
