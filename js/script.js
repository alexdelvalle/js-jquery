// Plain DOM version:

// run this function when the page finishes loading
// window.onload = function () {
//     var myH1 = document.querySelector('h1');
//
//     myH1.onclick = function () {
//         alert('You Clicked H1');
//     };
// };

// ---------------------------------------

// jQuery version:

// run this function when the page finishes loading
$(document).ready(function () {
    var myH1 = $('h1');

    var h1Size = 25;

    myH1.click(function () {
        h1Size += 3;
          // name of CSS property
          //          |
        myH1.css('font-size', h1Size);
                    //           |
                    // new value for CSS property

        // Plain DOM version:
        // myH1.style.fontSize = h1Size + 'px';
    });

    $('.reset-size').click(function () {
        h1Size = 25;
        myH1.css('font-size', h1Size);
    });
}); // document ready



$(document).ready(function () {
    var aquamanGifs = [
      'https://media.giphy.com/media/3xz2BtsGiAovlaCsRG/giphy.gif',
      'https://media.giphy.com/media/V4X14bU1vlHfa/giphy.gif',
      'https://media.giphy.com/media/Kn1UaRsYaGouc/giphy.gif',
      'https://media.giphy.com/media/NXqLd3mFD5DKo/giphy.gif'
    ];

    var currentIndex = 0;

    $('.next-img').click(function () {
        currentIndex += 1;

        // reset back to 0 if we go past the last index
        if (currentIndex === aquamanGifs.length) {
            currentIndex = 0;
        }

             // name of attribute
             //         |
        $('img').attr('src', aquamanGifs[currentIndex]);
                          //            |
                          // new value for attribute

        // Plain DOM version:
        // myImg.setAttribute('src', aquamanGifs[currentIndex]);
    });
}); // document ready



$(document).ready(function () {
    var score = 0;

    $('.upvote').click(function () {
        score += 1;
        updatePostDom();
    });

    $('.downvote').click(function () {
        score -= 1;
        updatePostDom();
    });


    function updatePostDom () {
        $('.post p').html('Score: ' + score);

        // Plain DOM version:
        // myP.innerHTML = 'Score: ' + score;

        var myPost = $('.post');

        // remove the classes "poop", "warm", and "hot"
        myPost.removeClass('poop warm hot');

        // add the "poop" class if the score is less than 0
        if (score < 0) {
            myPost.addClass('poop');
        }
        else if (score > 20) {
            myPost.addClass('hot');
        }
        else if (score > 10) {
            myPost.addClass('warm');
        }
    } // updatePostDom()
}); // document ready
