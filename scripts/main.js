let foodItems = ["Milk","bread","eggs","sugar","salt","chips","meat","coke","cheese","rice","beans"];
$(document).ready(function(){
	$(".psearch").autocomplete(
		{source: foodItems}
	);
});

function loadMore()
{
	$(".show").css("display","none");
	$(".hid").css("display","flex");
}

function viewFullGroceryList(divName,btnToHide,btnToShow)
{
	$('#'+divName).css("display","block");
	$('#'+btnToHide).css("display","none");
	$('#'+btnToShow).css("display","block");
}

function hideFullGroceryList(divName,btnToHide,btnToShow)
{
	$('#'+divName).css("display","none");
	$('#'+btnToHide).css("display","none");
	$('#'+btnToShow).css("display","block");
}

function showMap(mapName)
{
	$('#frame_map').css("display","none");
	$('#mapSafeway').css("display","none");
	$('#mapLondonDrugs').css("display","none");
	$('#'+mapName).css("display","block");
}

function thankyou(){
  $('.sh').css("display","none");
  $('.hidd').css("display","block");
}

function search()
{
	window.location="pages/search.html";
}

function showRow4(){
	$('.homeLoad').css('display','none');
	$('.row4').css('display','flex');
}


function showGroceryListButton()
{
	$('#liGroceryList').css("display","inline");
	$('#liUsername').css("display","inline");
}

function hideUserUnknownButtons()
{
	$('#liLogin').css("display","none");
	$('#liSignUp').css("display","none");
}
