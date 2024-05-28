/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  /* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("header nav").meanmenu();
  });

  /* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  $.validator.setDefaults({
    submitHandler: function () {
      alert("submitted!");
    },
  });

  $(document).ready(function () {
    $("#contact-form").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true,
        },
        message: "required",
        agree: "required",
      },
      messages: {
        name: "Por favor informe seu nome.",
        email: "Por favor informe um e-mail valido.",
        message: "Por favor diga sua mensagem.",
      },
      errorElement: "p",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("input"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-error")
          .removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-success")
          .removeClass("has-error");
      },
    });
  });

  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });
});