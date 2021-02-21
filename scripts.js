$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".game").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  $(".rslides").responsiveSlides();

  $("button.cat").on("click", function (e) {
    let categ = e.target.id;

    $.ajax({
      dataType: "json",
      url: "https://api.rawg.io/api/games?genres=" + categ,
      success: function (data) {
        console.log(data);
        var texte = "";
        for (var i = 0; i < 20; i++) {
          if (data["results"][i]["background_image"] !== null) {
            texte =
              texte +
              '<div class="game"><img src="' +
              data["results"][i]["background_image"] +
              '" alt="over" /><h3>' +
              data["results"][i]["name"] +
              "</h3></div>";
          }
        }
        $(".container").html(texte);
      },
    });
  });
  $.ajax({
    dataType: "json",
    url: "https://api.rawg.io/api/games",
    success: function (data) {
      console.log(data);
      var texte = "";
      for (var i = 0; i < 20; i++) {
        if (data["results"][i]["background_image"] !== null) {
          texte =
            texte +
            '<div class="game"><img src="' +
            data["results"][i]["background_image"] +
            '" alt="over" /><h3>' +
            data["results"][i]["name"] +
            "</h3></div>";
        }
      }
      $(".container").html(texte);
    },
  });
});

fetch("https://api.rawg.io/api/genres")
  .then((res) => res.json())
  .then((data) => console.log(data));
