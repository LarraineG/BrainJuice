$(document).ready(function() {

// POST Request to backend for new post

const $submitButton = $(".submit-post");

const $genreSelect = (".genre option:selected").text();
const $blurbEntry = $(".blurb").val().trim();
const $authorEntry = $(".author").val();
const $topicSelect = (".topic option:selected").text();

//User selects Genre and topic from seperate dropdowns

  var newPost = {
    blurb: $blurbEntry,
    author: $authorEntry,
    // joke, quote, advice
    topic: $topicSelect
  }

$(document).on("click", $submitButton, function(){
  submitPost(newPost);
});

function submitPost(inputPost) {

  $.post("api/genre/" + $genreSelect, inputPost, function() {
    console.log("you have sucessfully submitted your post");
  });

};

});
