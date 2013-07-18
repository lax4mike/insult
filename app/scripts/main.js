(function($){

    /*global insult, $*/
    'use strict';

    // this construct was made by Yeoman, not sure how I feel about it.
    window.insult = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        init: function () {
            
            // create insult model
            var insultModel = new window.insult.Models.InsultModel();

            // load words
            $.ajax("data/shakespearean-words.json", {
                dataType: "json"
            })
            .done(function(insultData) {

                // the data in the json corresponds directly with 'words' in the model
                insultModel.set(insultData);

                // make the view and attach it to the element and model
                insultView = new window.insult.Views.InsultView({ el: $("#insult-card"), model: insultModel });

                // when the user clicks refresh, trigger the refresh event in the model
                $("#refresh").click(function(){
                    // insultModel.trigger('refresh');

                    insultView.render();
                }.bind(this));


            })
            .fail(function(jqXHR, textStatus, errorThrown) { 
                console.log( "error: " + textStatus, jqXHR ); 
            });

        }
    };

    $(document).ready(function () {

        insult.init();

    });

})(jQuery)

var insultView;
