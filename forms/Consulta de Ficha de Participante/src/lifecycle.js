    /** Global Variables */
    //var currentLocation = "";

    var lifecycle = (function() {
        "use strict";

        var init = function() {
            setup();
            control();
        };

        var setup = function() {
            //currentLocation = document.location.origin;  
        }
        
        var control = function() {
            manipulateDOM.addButtonsSolic();
            $(".expand").on("click", manipulateDOM.actions4Listeners.expandEventListener);
        };

        return {
            init: init
        }
    })();