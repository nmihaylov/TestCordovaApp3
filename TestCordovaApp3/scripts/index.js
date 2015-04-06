// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        
        
        $("#add-all-the-data-here").append("<div data-role='collapsible' data-collapsed='true'><h3>some type</h3><p>some date</p></div>");
        $("#add-all-the-data-here").append("<div data-role='collapsible' data-collapsed='true'><h3>some type</h3><p>some date</p></div>");
        $("#add-all-the-data-here").append("<div data-role='collapsible' data-collapsed='true'><h3>some type</h3><p>some date</p></div>");
        //window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        alert('dasdasdasdasdas')
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };


    function gotFS(fileSystem) {
        fileSystem.root.getFile("data.xml", { create: true }, gotFileEntry, fail);
    }

    function gotFileEntry(fileEntry) {
        fileEntry.file(gotFile, fail);
    }

    function gotFile(file) {
        readAsText(file);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("Read as text");
            var xml = evt.target.result;
            fileObject = xml;
            ParseXmlCat(xml);
        };
        reader.readAsText(file);
    }

    //function to parse xml and create a li tag using the parsed values and append that to Ul tag 
    function ParseXmlCat(xmlcat) {
        $(xmlcat).find("record").each(function () {
            var type = $(this).attr("Type");
            var date = $(this).attr("Date");
            console.log(name);
            var litext = "<div data-role='collapsible' data-collapsed='true'><h3>" + type + "</h3><p>" + date + "</p></div>";
            console.log(litext);
            $("#add-all-the-data-here").append(litext);
        });
        $('ul').listview('refresh');
    }

    //if fail occurs at any point alert is displayed on phone device
    function fail(evt) {
        alert("configuration Error" + evt.target.error.code);
        console.log(evt.target.error.code);
    }

} )();