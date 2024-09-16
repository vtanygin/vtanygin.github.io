//idea here is we want to grab all the images on the home page, and focus in on them when the user clicks

//a note about how JS and DOM work: any JS that interacts with the DOM won't be able to see it until the page actually renders.
//You can force it to wait using the window.onload wrapper, or using the below snippet in jQuery:

//$(function() {
    // do stuff when DOM is ready
//})

//Or just stick it at the end of the body tag.

//jQuery syntax: $('div') is identical to document.querySelectorAll('div'); it grabs everything inside 'div' tags
//$('.container') selects all elements with class "container"
//$('#name') selects all elements with id "name"

//CSS manipulation in jQuery
//$(el).css('border-width', '20px'); is like el.style.borderWidth = '20px'
//It's nice in that you can manipulate *any* CSS property by calling css('property', 'new value')

//Actual code follows. Note that since we put the script tag loading this .js file at the end of the body, we can access all DOM elements...
//...and we have access to jQuery (since that's in the head). In general, .js files can call on information from other .js files loaded earlier in the HTML document.
//-------------------------------------------------------------------------------------------------------------------
//Below is how to get class w/o jQuery
/*var people = $('.person');
$.each(people, function (index, el) {
    var _this = $(el);
    if (_this.hasClass('happy')) {
        alert('Happy!');
    } else if (_this.hasClass('fat')) {
        alert('Fat!');
    }
});*/
//------------------------------------------------------

//Below is with jQuery
//var className = $('div_name').attr('class');

/*pseudocode for the new hiding approach

If we click a tag:

var x = $(".blog-post")     //get all blog post divs
if (x.hasClass("the tag we clicked")
    don't do anything
else
    x.hide();

Then we append "tag we clicked" to the header and give it reverse functions (if it has the class, x.show(), else do nothing).

Note on jQuery selectors:

$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".

*/



$(document).ready(function ()
{
    //var y = document.getElementsByClassName("tags");
    //var test = ''
    //var arr = Array.from(y)

    

    $("button").click(function ()
    {
        //for (let i = 0; i < y.length; i++) {
          //  test += y[i].innerHTML + ' , '
       // }
       // alert(test);

        var x = $(".tags")
        //var y = $(".books")
        var y = $("div[class*='blog-post']") 
        //var y = $("div:not([class*='books'][class*=blog-post])") 
        y.fadeOut()
        //var z = y.toArray()

        //y.each(function () {
           // if (true) {
              //  this.fadeOut()
         //  }
       // })

        //for (let i = 0; i < z.length; i++) {
           // alert(String(z.innerHTML))
            //if (z[i].hasClass("politics")) {
              //  z[i].fadeOut()
           // }
       // }
        //if (y.hasClass("politics")){
        //  y.fadeOut()
        //}

        /*var x = $(".tags")
        if (x.is(':visible')){
            //$(".tags").hide();
            x.hide();
            //x.style.display = "inline";
        }
        else {
            //$(".tags").unhide();
            x.show();
            //x.style.display = "none";
        }*/

    });
});