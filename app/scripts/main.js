/*global insult, $*/
'use strict';


window.insult = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        // load words
        var words1 = new insult.Collections.WordCollection().fetch({url: "scripts/words.json"}).complete(function() {
    console.log(words1);
});;

   
    }
};

$(document).ready(function () {
    insult.init();
});
