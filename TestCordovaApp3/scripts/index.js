// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

var app = app || {};

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    // ############ IMPORTANT REMOVE THIS BEFORE ADD TO PHONEGAP
    // ################################################################################
    //setTimeout(onDeviceReady(), 5000);
    // ################################################################################
  
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.


        //alert('device ready')
        console.log('device ready')
        getData();
    };


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    
})();


function showFilterFromTo() {
    var selectFrom = $('#select-destination-from option:selected').text();
    var selectTo = $('#select-destination-to option:selected').text();
    var destinationsArr = [];

    console.log(selectFrom);
    console.log(selectTo);

    $('#filtered-data').html("<div data-role='collapsible' data-collapsed='true'><h3>INFO: Когато цъкнете на + отляво се показва повече информация</h3><p>примерна информация</p></div>")
    //$('#filtered-data').empty();

    for (var i = 0; i < app.globalData.length; i++) {
        var direction = app.globalData[i];
        console.log("for cycle");

        if (direction.From == selectFrom && direction.To == selectTo) {
            console.log('if');
            $('#filtered-data').append("<div data-role='collapsible' data-collapsed='true'><h3><span>От: <i>" + direction.From + "</i>  До: <i>" + direction.To + "</i>  Дата: <i>" + direction.Datee.iso + "</i></span></h3><p>Фирма: " + direction.Firm + "</p><p>Тип: " + direction.Type + "</p><p>Цена: " + direction.Price + "</p><p><input type='submit' data-icon='info' value='преглеждане на маршрут' /></p></div>");
        }
    }
    //$('#filtered-data').collapsibleset('refresh');
    $('#filtered-data').trigger('create');
}

function addToDestinations() {

    var selectFrom = $('#select-destination-from option:selected').text();
    var selectTo = $('#select-destination-to');
    var selectFromArr = [];
    var selectToArr = [];
    
    for (var i = 0; i < app.globalData.length; i++) {
        var direction = app.globalData[i]
        if (($.inArray(direction.To, selectToArr)) == -1) {
            if (direction.From == selectFrom) {
                console.log('if 2')
                selectToArr.push(direction.To);
            }
        }
    }

    selectTo.html('<option value="" disabled selected>Крайна дестинация</option>');

    for (var i = 0; i < selectToArr.length; i++) {
        selectTo.append($("<option>" + selectToArr[i] + "</option>"))

    }

    //sortSelectOptions('#select-destination-from');
    //sortSelectOptions('#select-destination-to');
}



function addFromDestinations() {

    var selectTo = $('#select-destination-to option:selected').text();
    var selectFrom = $('#select-destination-from');
    var selectToArr = [];
    var selectFromArr = [];
    
    for (var i = 0; i < app.globalData.length; i++) {
        var direction = app.globalData[i]
        if (($.inArray(direction.From, selectFromArr)) == -1) {
            if (direction.To == selectTo) {
                console.log('if 2')
                selectFromArr.push(direction.From);
            }
        }
    }

    selectFrom.html('<option value="" disabled selected>Начална дестинация</option>');

    for (var i = 0; i < selectFromArr.length; i++) {
        selectFrom.append($("<option>" + selectFromArr[i] + "</option>"))

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
        var direction = app.globalData[i]
        if (($.inArray(direction.From, selectFromArr)) == -1) {
            selectFromArr.push(direction.From);
        }

        if (($.inArray(direction.To, selectToArr)) == -1) {
            selectToArr.push(direction.To);
        }
    }

    selectFrom.html('<option value="" disabled selected>Начална дестинация</option>');
    selectTo.html('<option value="" disabled selected>Крайна дестинация</option>');

    for (var i = 0; i < selectFromArr.length; i++) {
        selectFrom.append($("<option>" + selectFromArr[i] + "</option>"))

    }
    for (var i = 0; i < selectToArr.length; i++) {
        selectTo.append($("<option>" + selectToArr[i] + "</option>"))

    }

    //sortSelectOptions('#select-destination-from');
    //sortSelectOptions('#select-destination-to');
}


function sortSelectOptions(selectElement) {
    var options = $(selectElement + " option");

    options.sort(function (a, b) {
        if (a.text.toUpperCase() > b.text.toUpperCase()) return 1;
        else if (a.text.toUpperCase() < b.text.toUpperCase()) return -1;
        else return 0;
    });

    $(selectElement).empty().append(options);
}


function displayAllData() {
    for (var i = 0; i < app.globalData.length; i++) {
        var direction = app.globalData[i]
        $('body').append($("<h1></h1>"))
        $('body').append($("<p>From: " + direction.From + "</p>"))
        $('body').append($("<p>To: " + direction.To + "</p>"))
        $('body').append($("<p>Firm: " + direction.Firm + "</p>"))
        $('body').append($("<p>Type: " + direction.Type + "</p>"))
        $('body').append($("<p>Date: " + direction.Datee.iso + "</p>"))
        $('body').append($("<p>Price: " + direction.Price + "</p>"))
    }
}

function showResults() {
    var from = $("#From option:selected").text() || null;
    var to = $("#To option:selected").text();
    app.from = from;
    app.to = to
    for (var i = 0; i < app.globalData.length; i++) {
        var direction = app.globalData[i];
        if (direction.From == from && direction.To == to) {
            console.log(direction.Price);
        }
    }

    $('body').append($('<button id="addData" onclick="showFilter()">Get filter</button>'))
}

function showFilter() {
    for (var i = 0; i < app.globalData.length; i++) {
        var direction = app.globalData[i];
        console.log(app.to);

        if (direction.From == app.from && direction.To == app.to) {
            if (direction.Price < 8 || direction.Price == null) {
                console.log("From: " + direction.From + " To:" + direction.To + " Price: " + direction.Price);
            }
        }
    }
}