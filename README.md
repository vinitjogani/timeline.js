#timeline.js
> requires mousewheel plugin https://github.com/jquery/jquery-mousewheel/
>
> works great with animate.css: https://daneden.github.io/animate.css/

Timeline.js is a simple jQuery plugin to implement a timeline of DOM elements. To add some interesting animation, we will use Animate.css! So let's begin with the JavaScript code:
```
$(document).ready(function(){
    $("#timeline").timeline('animated swing', 'animated hinge');
});
```

That's it! Now let's move on to the HTML:
```
<script src="js/jquery.min.js"></script>
<script src="js/jquery.mousewheel.js"></script>
<script src="js/timeline.js"></script>
<link href='css/animate.css' rel='stylesheet' type='text/css'>

<div id="timeline" data-height="500">
    <h1 data-top="0" data-bottom="100">
        This heading will show from 0th mousewheel scroll unit to 100th mousewheel scroll unit. If you scroll beyond the 100th frame, this will get hidden and will achieve the class 'animated hinge'.
    </h1>
    <h2 data-top="100" data-bottom="300">
        Once the first heading  is hidden, this heading will pop in and get the 'animated swing' class which remains til lthe 300th frame.
    </h2>
    <p data-top="300" data-bottom="455">
        This works with any tag and with any number between 0 and data-height.
    </p>
    <p data-top="400" data-bottom="500">
        The DOM elements can also overlap each other.
    </p>
    <footer>Elements without a specified data-top and data-bottom are rendered irrespective of the current frame</footer>
</div>
```

Live demo: http://vinitjogani.github.io/timeline.js