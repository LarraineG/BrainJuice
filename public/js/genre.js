$(document).ready(() => {
  $("#motivateBtn").on("click", (event) => {
    console.log("This motivate button is working.");
    $.get("/motivate")
      .then((data) => {
        console.log("Motivate Success!");
        location.assign("/motivate");
      });
  });

  $("#humorBtn").on("click", (event) => {
    console.log("This humor button is working.");
    $.get("/humor")
      .then((data) => {
        console.log("Humor Success!");
        location.assign("/humor");
      });
  });

  $("#surpriseBtn").on("click", (event) => {
    console.log("This surprise button is working.");
    $.get("/surprise")
      .then((data) => {
        console.log("Surprise Success!");
        location.assign("/surprise");
      });
  });

  $("#subBtn").on("click", (event) => {
    event.preventDefault();
    console.log("Submit Button Working");
    const newBlurb = {
      blurb: $("#blurbEntry").val().trim(),
      author: $("#authorEntry").val().trim(),
      topic: $("#topicSelect").val().trim(),
    };
    const genreSelect = $("#genreSelect").val();

    $.ajax(`/api/${genreSelect}`, {
      type: "POST",
      data: newBlurb,
    }).then(
      () => {
        console.log("created new entry");
      },
    );
  });
});
