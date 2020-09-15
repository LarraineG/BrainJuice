$(document).ready(function() {

// POST Request to backend for new post

const $submitButton = $(".submit-post");

const $genreSelect = "DropdownValue"; //VALUE FROM DROPDOWN???
const $blurbEntry = $(".blurb").value().trim();
const $authorEntry = $("author").value();
const $topicSelect = "DropdownValue"; //VALUE FROM DROPDOWN???

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
  var genre = $genreSelect.VALUE;

  $.post("api/genre/" + genre, inputPost, function() {
    console.log("you have sucessfully submitted your post");
  });

};

});
