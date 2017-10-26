$(document).ready(function () {
    // this click only applies to trash buttons that were there at the start
    $('.glyphicon-trash').click(function () {
        var theTrashcan = $(event.currentTarget);

        // get the closest <li> ancestor and remove it
        theTrashcan.closest('li').remove();

        // don't use "parent()" because the structure can change
        // theTrashcan.parent().remove();

        // Plain DOM version:
        // myUl.removeChild(theTrashcan.parentNode);
    }); // trash click


    $('.btn-primary').click(function () {
        // get the task value from the input
        // (only input tags have a value)
        var taskText = $('.task-input').val();

        // Plain DOM version:
        // var taskText = myInput.value;


        // create the new <li> tag with its contents
        var taskHtml =
          $('<li><span>'+ taskText +'</span> <button><i class="glyphicon glyphicon-trash"></i></button></li>');

        // Plain DOM version:
        // var taskHtml = document.createElement('li');
        // taskHtml.innerHTML = '<span>'+ taskText +'</span> <button><i class="glyphicon glyphicon-trash"></i></button>';

        // add the click event to this new trash button
        // ("find()" gives me all the descendants that match the selector)
        taskHtml.find('.glyphicon-trash').click(function () {
            var theTrashcan = $(event.currentTarget);

            // get the closest <li> ancestor and remove it
            theTrashcan.closest('li').remove();
        });


        // add the new <li> tag to the <ul> parent
        // (use "append()" instead of "html()" so that the other tasks don't get erased)
        $('ul').append(taskHtml);

        // Plain DOM version:
        // myUl.appendChild(taskHtml);
    }); // btn-primary click
}); // document ready
