$(document).ready(function () {

    $("#calc_btn").click(function () {
        var num1 = $("#num1").val() != '' ? $("#num1").val() : 0;
        var num2 = $("#num2").val() != '' ? $("#num2").val() : 0;
        var num3 = $("#num3").val() != '' ? $("#num3").val() : 0;
        var data_array = 'func=' + $('input:radio[name=operation]:checked').val() + "&num1=" +
            num1 + "&num2=" + num2 +
            "&num3=" + num3;

        $.ajax({
            url: "http://shenkar.html5-book.co.il/2017-2018/dcs/dev_19/calculator/dcs.php",
            datatype: 'json',
            type: $('input:radio[name=method]:checked').val(),
            data: data_array,
            success: function (data) {
                console.log(data.retVal);
                $("#result").html(data.retVal);
            }
        });
    });
});