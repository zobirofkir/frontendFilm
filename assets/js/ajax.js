$(document).ready(function(){
    $("#moviesForm").submit(function(event){
      event.preventDefault();

      const title = $("#title").val();
      const image = $("#image").val();
      const description = $("#description").val();

      const filmData = {
        title: title,
        image: image,
        description: description
      };

      $.ajax({
        url: "http://127.0.0.1:8000/api/film/create",
        type: "POST",
        data: JSON.stringify(filmData),
        contentType: "application/json",
        success: function(data, status, xhr){
            $("#alert").html(`
            <div class="alert alert-success" role="alert">
                You are pose the movie
            </div>
            `);
        },
        error: function(data ,error, xhr){
            console.log("bad request");
        }
      });
    });
  });