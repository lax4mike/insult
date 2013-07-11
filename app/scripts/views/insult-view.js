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
        // this.$el is the DOM element wrapped in jQuery.
        // set the html to the template rendered with the model as context.

        this.$insultText.html( this.template(this.model) );

        // var time = 300;

        // this.$card.animate({
        //     opacity: 0,
        //     width: "150%",
        //     height: "150%"
        // }, time, function() {
        //     // Animation complete.
        //     this.$insultText.html( this.template(this.model) );

        //     this.$card.css ({
        //         width: "75%",
        //         height: "75%"
        //     }).animate({
        //         opacity: 1,
        //         width: "100%",
        //         height: "100%"
        //     }, time);

        // }.bind(this));

        
    }
});
