//added random quote package ask
function getQuotes(){
    $.get("/api/quotes")
    .then((data) => {
      console.log(data);

      var quoteBlock = `"${data.text}" - ${data.author}`

      $(".quote").text(quoteBlock)
    })
}

getQuotes()
