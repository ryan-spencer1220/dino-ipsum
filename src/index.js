import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Dinosaur from "./js/dinosaur.js";

$(document).ready(function () {
  $("#submit").click(function () {
    let promise = Dinosaur.getWord();
    promise.then(function (response) {
      const data = JSON.parse(response);
      let myDino = data[0][0].split("");
      $(".randomDino").text(myDino);
      //$(".correctLetters").text(); make an empty array with length of generated dinosaur word letters
      // createdArray = ["_","_","_","_","_","_","_","_","_","_","_","_","_"]
    });
  });
});
