
//----------------------------------------------------------------
function Person(name) {
    this.name = name;
}
var p1 = new Person("Nag"); // new Constructor()
//----------------------------------------------------------------

// Object

var config = new Object(); // 
config.url = "http://"
config.httpMethod = "GET"
config.onSuccess = function (response) {
    //..
}

// or

var newConfig = {
    url: 'http//',
    httpMethod: 'GET',
    onSuccess: function (response) {
        //..
    }
} // literal

//----------------------------------------------------------------

// Array / List colln

var array = new Array();
array.push("item-1")
array.push("item-2")
array.push("item-3")

/// or

var newArray = ["item-1", "item-2", "item-3"] // literal

//----------------------------------------------------------------

// Regular Expression

// format : 1234-23-232

var inp = "1213-34-343"

// var regExp = new RegExp("\\d{4}-\\d{2}-\\d{3}")

// or

var newRegExp = /\d{4}-\d{2}-\d{3}/ // literal

var isValid = newRegExp.test(inp)
if (isValid)
    console.log("valid");
else
    console.log("invalid");


//----------------------------------------------------------------