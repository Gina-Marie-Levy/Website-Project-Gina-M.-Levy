Website Project-Gina M. Levy


Within this file is my main file. I am making sure that my navigation is on here, links to my Javascript and CSS files are included, along with images as well.

Index.html File:
	I start off with making sure my code can be read with HTML and HTML5 with <!DOCTYPE html> and it can be read in English so I use the < html lang=”en”>.

With in the <head> I make sure that I have the title Web Project.

With in the Script I make sure that I have all my links to style sheets of CSS and Javascript links. 

The viewport is something I will use to make sure it can be viewed on tablet and mobile if necessary. Which the code for that is: <meta name="viewport" content="width=device-width, initial-scale=1">

Here are the code for my links to the main CSS and the blueberry slider for the images. Here are the codes:
<link rel="stylesheet" type="text/css" href="css/main.css">

<link rel="stylesheet" href="css/blueberry.css" />
 
I used this code for the AJAX and the javascript for the blueberry image slider:
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>

<script src="js/jquery.blueberry.js"></script>

Here are my codes that I used for the help of Google’s Chart’s:
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script><script src="js/Googlecharts.js"></script>

<script src="js/Googlecharts2.js"></script>

After the main script links I used this script to be able to use Jquery blueberry image slider. 
<script>
$(window).load(function(){
	$('.blueberry').blueberry();
});
</script>

<script language="JavaScript">
<!--
function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight = document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth = document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).height = (newheight) + "px";
    document.getElementById(id).width = (newwidth) + "px";
}
//-->
</script>

This was in the header of both my files.

With in the <body> tag I started off with my Logo of my fake company/Project name and the navigation bar.
