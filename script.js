$(document).ready(function() {
    $('#FormID').submit(function(event) {
        event.preventDefault();
        var taskText = $('#MainInput').val().trim();
        if (taskText !== "") {
            $('#ListaNO').append('<li>' + taskText + '</li>');
            $('#MainInput').val("");
        }
    });

    $(document).on('click', 'ul#ListaNO li', function() {
        $(this).toggleClass('completado');
    })
});