$(document).ready(() => {
// POST Request to backend for new post

  // const $submitButton = $(".submit-post");

  // const $genreSelect = $(".genre option:selected").text();
  // const $blurbEntry = $(".blurb").val().trim();
  // const $authorEntry = $(".author").val();
  // const $topicSelect = $(".topic option:selected").text();

  // // User selects Genre and topic from seperate dropdowns

  // const newPost = {
  //   blurb: $blurbEntry,
  //   author: $authorEntry,
  //   // joke, quote, advice
  //   topic: $topicSelect,
  // };

  // $(document).on("click", $submitButton, () => {
  //   submitPost(newPost);
  // });

  // function submitPost(inputPost) {
  //   $.post(`api/genre/${$genreSelect}`, inputPost, () => {
  //     console.log("you have sucessfully submitted your post");
  //   });
  // }

  $("#subBtn").on("click", (event) => {
    const newBlurb = {
      blurb: $("#blurbEntry").val().trim(),
      author: $("authorEntry").val().trim(),
      topic: $("topicSelect").val(),
    };
    const genreSelect = $("genreSelect").val();
    $.ajax(`/api/${genreSelect}`, {
      type: "POST",
      data: newBlurb,
    }).then(
      () => {
        console.log("created new entry");
        location.reload();
      },
    );
  });

  $("#motivateBtn").on("click", (event) => {
    console.log("This motivate button is working.");
    $.get("/motivate", () => {
      console.log("Motivate Success!");
      location.assign("/motivate");
    });
  });

  $("#humorBtn").on("click", (event) => {
    console.log("This humor button is working.");
    $.get("/humor", (data) => {
      console.log("Humor Success!");
    });
  });

  $("#surpriseBtn").on("click", (event) => {
    console.log("This surprise button is working.");
    $.get("/surprise", (data) => {
      console.log("Surprise Success!");
    });
  });
});
