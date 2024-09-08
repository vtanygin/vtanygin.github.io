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
//Ligma nuts github, update ur shit thanks
//Below is with jQuery
var className = $('div_name').attr('class');
$(document).ready(function ()
{
    var x = document.getElementsByClassName("tags")

    $("button").click(function ()
    {
        if (true){
            //$(".tags").hide();
            x.hide();
            //x.style.display = "inline";
        }
        else {
            //$(".tags").unhide();
            //x.unhide();
            //x.style.display = "none";
        }

    });
});