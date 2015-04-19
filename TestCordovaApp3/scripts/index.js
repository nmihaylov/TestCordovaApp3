// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

var app = app || {};

(function () {
    "use strict";

    //document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    // ############ IMPORTANT REMOVE THIS BEFORE ADD TO PHONEGAP
    // ################################################################################
    setTimeout(onDeviceReady(), 5000);
    // ################################################################################
  
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.


        //alert('device ready')
        console.log('device ready')
        getData();
        //setTimeout(addAllDestinations(), 1000);
    };


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    
})();


function addToDestinations() {

    var selectFrom = $('#select-destination-from option:selected').text();
    var selectTo = $('#select-destination-to');
    var selectFromArr = [];
    var selectToArr = [];
    
    for (var i = 0; i < app.globalData.length; i++) {
        var dircetion = app.globalData[i]
        if (($.inArray(dircetion.From, selectFromArr)) == -1) {
            if (dircetion.From == selectFrom) {
                console.log('if 2')
                selectToArr.push(dircetion.To);
            }
        }
    }

    selectTo.html('');

    for (var i = 0; i < selectToArr.length; i++) {
        selectTo.append($("<option>" + selectToArr[i] + "</option>"))

    }
}

function addAllDestinations() {
    //alert('addAllDestinations')
    console.log('addAllDestinations');

    var selectFrom = $('#select-destination-from');
    var selectTo = $('#select-destination-to');
    var selectFromArr = [];
    var selectToArr = [];

    for (var i = 0; i < app.globalData.length; i++) {
        var dircetion = app.globalData[i]
        if (($.inArray(dircetion.From, selectFromArr)) == -1) {
            selectFromArr.push(dircetion.From);
        }

        if (($.inArray(dircetion.To, selectToArr)) == -1) {
            selectToArr.push(dircetion.To);
        }
    }

    for (var i = 0; i < selectFromArr.length; i++) {
        selectFrom.append($("<option>" + selectFromArr[i] + "</option>"))

    }
    for (var i = 0; i < selectToArr.length; i++) {
        selectTo.append($("<option>" + selectToArr[i] + "</option>"))

    }
    //selectFrom.append("<option>test option 3</option>");

    //$('select-destination-from').append(selectFrom);
    //$('select-destination-to').append(selectTo);
    //$('body').append($("<button onclick='showResults()'>Show Results</button>"))
}



function displayAllData() {
    for (var i = 0; i < app.globalData.length; i++) {
        var dircetion = app.globalData[i]
        $('body').append($("<h1></h1>"))
        $('body').append($("<p>From: " + dircetion.From + "</p>"))
        $('body').append($("<p>To: " + dircetion.To + "</p>"))
        $('body').append($("<p>Firm: " + dircetion.Firm + "</p>"))
        $('body').append($("<p>Type: " + dircetion.Type + "</p>"))
        $('body').append($("<p>Date: " + dircetion.Datee.iso + "</p>"))
        $('body').append($("<p>Price: " + dircetion.Price + "</p>"))
    }
}

function showResults() {
    var from = $("#From option:selected").text() || null;
    var to = $("#To option:selected").text();
    app.from = from;
    app.to = to
    for (var i = 0; i < app.globalData.length; i++) {
        var dircetion = app.globalData[i];
        if (dircetion.From == from && dircetion.To == to) {
            console.log(dircetion.Price);
        }
    }

    $('body').append($('<button id="addData" onclick="showFilter()">Get filter</button>'))
}

function showFilter() {
    for (var i = 0; i < app.globalData.length; i++) {
        var dircetion = app.globalData[i];
        console.log(app.to);

        if (dircetion.From == app.from && dircetion.To == app.to) {
            if (dircetion.Price < 8 || dircetion.Price == null) {
                console.log("From: " + dircetion.From + " To:" + dircetion.To + " Price: " + dircetion.Price);
            }
        }
    }
}