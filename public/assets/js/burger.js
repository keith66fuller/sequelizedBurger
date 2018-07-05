$(document).ready(() => {
    $(".devour_it").on("click", function (e) {
        $.ajax({
            method: "POST",
            url: "/devour/",
            data: {
                id: $(this).data("id")
            }
        })
        .catch(err => {
            throw err
        })
        .then( document.location.reload())
    })

    $("#newburger").on("click", function (e) {
        $.ajax({
            method: "POST",
            url: "/newburger",
            data: {
                burger_name: $('#burger').val()
            }
        })
        .catch(err => {
            throw err
        })
    })
})