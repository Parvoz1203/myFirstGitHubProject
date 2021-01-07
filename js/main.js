/*
// $(document).ready(function () {
//     $("button").click(function () {
//         $("h1").addClass("theader tbody");
//         $("p").addClass("tbody theader");
//     })
// })
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
*/
$ (document).ready(function () {
    $(".btn-primary").click(function () {
        var a=$("#a").val();
        var b=$("#b").val();
        if (a>b){
            $("#kattason").html("katta son a");
        }else if(a<b){
            $("#kattason").html("katta son b");
        }else{
            $("#kattason").html("Ikkala son teng");
        }
    })
})