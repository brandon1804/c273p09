$(document).ready(function () {

    $("#idCountry").change(function () {
        var id = $("#idCountry").val();
        $.ajax({
            type: "GET",
            url: "getCountryDetails.php",
            data: "id=" + id,
            cache: false,
            dataType: "JSON",
            success: function (response) {
                var message = "<tbody><tr><td>" + response.population + "</td>"
                        + "<td>" + response.obese + "</td></tr></tbody>";
                $("#obeseTable").append(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});
