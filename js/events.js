$(document).ready(function () {
    $('.disappear').click(function () {
        // $('.wrapper').hide();

        // $('.wrapper').fadeOut(7000);
          // fade out over 7 seconds

        $('.wrapper').slideUp(7000);
          // slide up over 7 seconds
    });

    $('.appear').click(function () {
        // $('.wrapper').show();

        // $('.wrapper').fadeIn(7000);
          // fade in over 7 seconds

        $('.wrapper').slideDown(7000);
          // slide down over 7 seconds
    });
}); // document ready



$(document).ready(function () {
    var samuelPosition = {
        x: 0,  // left
        y: 100 // top
    };

    var speed = 20;

    $(document).keyup(function () {
        switch (event.keyCode) {
            case 65:  // "a" key
            case 37:  // left arrow
                samuelPosition.x -= speed;
                break;

            case 32:  // spacebar
            case 87:  // "w" key
            case 38:  // up arrow
                samuelPosition.y -= speed;
                break;

            case 68:  // "d" key
            case 39:  // right arrow
                samuelPosition.x += speed;
                break;

            case 83:  // "s" key
            case 40:  // down arrow
                samuelPosition.y += speed;
                break;
        } // switch

        $('.samuel').css('left', samuelPosition.x);
        $('.samuel').css('top', samuelPosition.y);
    }); // keyup
}); // document ready
