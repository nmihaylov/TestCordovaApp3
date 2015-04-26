var app = app || {};
var baseUrl = "https://api.parse.com/1/classes/DummyData";
app.globalData = [];

function getData() {
    //alert('get data')
    console.log('get data');
    
    app.ajaxRequester.get(
	baseUrl,
	function (data) {
	    for (var dircetion in data.results) {
	        var dircetion = data.results[dircetion];
	        app.globalData.push(dircetion);
	    }
	    
	    console.log('get data success');
	    addAllDestinations();
	    //alert('get data success');
	},
	function () {

	    //alert('Cannot load data.');
	    console.log('get data fail');
	})
}

/*
function addData() {
    var form = $("#form").val();
    var to = $("#to").val();
    var firm = $("#Firm").val();
    var type = $("#Type").val();
    var date = new Date($("#Date").val());
    var price = parseFloat($("#Price").val());

    app.ajaxRequester.post(baseUrl, {
        "From": form,
        "To": to,
        "Firm": firm,
        "Type": type,
        "Datee": {
            "__type": "Date",
            "iso": date
        },
        "Price": price

    },
	function (data) {
	    console.log(data);
	},
	function (err) {
	    console.log(err);
	})
}
*/