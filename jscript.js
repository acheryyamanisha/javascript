//program to print day and date
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.write("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Noon';
  }
  else
  {
  hour=12;
  prepand=' PM';
  }
  }
  if (hour===0 && prepand===' AM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Midnight';
  }
  else
  {
  hour=12;
  prepand=' AM';
  }
  }
  document.write("<br>");
document.write("Current Time : "+hour + prepand + " : " + minute + " : " + second);

document.write("<hr>");


//function to print the current page
function print_current_page()
{
window.print();
}

//function to print current date in various formats

document.write("the current date displayed in the following format <br>");

var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = mm+'-'+dd+'-'+yyyy;
document.write(today);
document.write("<br>");
today = mm+'/'+dd+'/'+yyyy;
document.write(today);
document.write("<br>");
today = dd+'-'+mm+'-'+yyyy;
document.write(today);
document.write("<br>");
today = dd+'/'+mm+'/'+yyyy;
document.write(today);
document.write("<hr>");

//to print the area of a triangle
var side1=5;
var side2=6;
var side3 = 7;
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
document.write("the area of the triangle is : ");

document.write(area);
document.write("<hr>");

//function to animate text
function animate_string(id)
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;

setInterval(function ()
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}
document.write("The URL of the current page is ");
document.write(document.URL);
document.write("<hr>");

//to break an url
document.write("<p>breaking an url into an array</p>");
function break_address(url_add) {
    var data = url_add.split("://")
    var protocol = data[0];
    data = data[1].split(".com");
    var domain = data[0];
    data = data[1].split("/");

    if(data[1]){
        return [protocol,domain,data[1]]
    }

    return [protocol,domain]
}

var url_add = "https://www.w3schools.com/js/"
document.write("Original address: "+url_add);
document.write(break_address("<br>"+url_add));
