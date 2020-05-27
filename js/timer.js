(function($) {
    $.fn.countdown = function(milliseconds, callback) {
        var $el = this;
        var buffer = 200;
        var end, timer;

        milliseconds = milliseconds || 5 * 60 * 1000; // 5 minutes
        end = new Date(Date.now() + milliseconds + buffer);
        tick();

        function formatTime(time) {
            minutes = time.getMinutes();
            seconds = time.getSeconds();
            if(seconds < 10){
            	return minutes + ":" +"0"+seconds;
            }else{
            	return minutes + ":" + seconds;
            }
        }

        function tick() {
            var remaining = new Date(end - Date.now());

            if (remaining > 0) {
                $el.html(formatTime(remaining));
                timer = setTimeout(tick, 1000);
            } else {
                clearInterval(timer);
                if (callback) callback.apply($el);
            }
        };
    };

    $('.quiz-play a').click(function(){
    	$('.quiz-play').hide();
	    $('.quiz-questions').removeClass('hidden').addClass("animate__fadeIn");
	    $('.quiz-timer').countdown(1 * 60 * 1000, function(){
	    	//Highlight the right answer
	    });
    });
    
    // $('').countdown(3 * 1000, function() {
    //     this.html("Time's up!");
    // });
})(jQuery);