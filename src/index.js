import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Dinosaur from "./js/dinosaur.js";

$(document).ready(function () {
  $("#submit").click(function () {
    var getDinos = $.get(
        "https://dinoipsum.com/api/?format=html&paragraphs=1&words=1"
      ),
      fillContainer = function (html) {
        $(".randomDino").html(html);
      },
      oops = function () {
        console.log("Where did all the dinosaurs go?");
      };

    getDinos.then(fillContainer, oops);
  });
});
