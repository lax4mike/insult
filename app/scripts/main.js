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
            $.ajax("data/words.json", {
                dataType: "json"
            })
            .done(function(insultData) {

                // the data in the json corresponds directly with 'words' in the model
                insultModel.set(insultData).refresh();

                // make the view and attach it to the element and model
                new window.insult.Views.InsultView({ el: $("#insult"), model: insultModel });

                // when the user clicks refresh, trigger the refresh event in the model
                $("#refresh").click(function(){
                    insultModel.trigger('refresh');
                });


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
