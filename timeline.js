$.fn.timeline = function(showclass, hideclass){
    bgcursor = 0;
    max = parseInt(this.attr("data-height"));
    $(window).mousewheel(function(event){
        bgcursor += event.deltaY * -5;
        if(bgcursor <= max && bgcursor >= 0){
            this.children().each(function(index, el){
                el = $(el);
                if(parseInt(el.attr("data-top")) != NaN && parseInt(el.attr("data-bottom")) != NaN)
                {
                    if(parseInt(el.attr("data-top")) < bgcursor && parseInt(el.attr("data-bottom")) > bgcursor) {
                        el.removeClass(hideclass);
                        el.fadeIn();   
                        el.addClass(showclass);
                    }
                    else {
                        el.removeClass(showclass);
                        el.addClass(hideclass);
                        el.fadeOut();
                    }
                }
            });
        }
        else if (bgcursor > max) {
            bgcursor = max;
        }
        else {
            bgcursor = 0;   
        }
    });
};