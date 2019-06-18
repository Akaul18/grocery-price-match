$(document).ready(function(){
  $('.rating').rating();
});

function newReview() {
    let text = reviewText.value;
    document.getElementById("reviewTextSubmit").innerHTML = "<div class='reviews'>" + "<div class='singleReview'>" + "<div class='reviewAvatar'>" + "<img src='../images/reviewAvater_05.png' alt='Review Avatar'>" + "</div>" + "<div class='reviewName'>" + "Andre Falco" + "</div>" + "<div class='date'>" + "October 2018" + "</div>" + "<div class='stars'>" +
     "<span class='fa fa-star starChecked'>" + "</span>" + "<span class='fa fa-star starChecked'>" + "</span>" + "<span class='fa fa-star starChecked'>" + "</span>" + "<span class='fa fa-star starChecked'>" + "</span>" + "<span class='fa fa-star starChecked'>" +"</span>" + "</div>" + "<p class='reviewText'>" + text + "</p>" + "</div>" + "</div>";
}


//$(':radio').change(function() {
//  console.log('New star rating: ' + this.value);
//});
