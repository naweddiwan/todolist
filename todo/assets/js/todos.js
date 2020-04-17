//Strike completed
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Delete lists when X clicked
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();   //  the "this" is actually the li not the span as we forced ourself into this.parent in previous line code
    })
    event.stopPropagation(); // Avoid propagtion to the parent li
});


// Creating new todos
$("input[type='text']").on("keypress", function (e) {

    if (e.which === 13) {
        var new_todo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + new_todo + "</li>")
    }//when nested then use single quotes.
    console.log(new_todo);
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})
