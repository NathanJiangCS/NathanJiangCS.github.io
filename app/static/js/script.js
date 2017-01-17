/*
(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
    	console.log("Clock");
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})(); */

$(document).ready(function() {
  
  var stack1 = $('#stack1');
  
  stack1.removeClass('start');
  
  stack1.hammer().on('tap', function(event) {
    stack1.addClass('hover');
    event.stopPropagation();
  });
  
  
  $(document).hammer().on('tap', function(event) {
    stack1.removeClass('hover');
    $('.card').removeClass('hover');
  });
  
  $('.card').hammer().on('tap', function(event) {
      $('.card').removeClass('hover');
      $(this).addClass('hover');
  });
});

function hover(element) {
    element.setAttribute('src', 'https://s29.postimg.org/57qs862xz/Hacker_Rank_logo.png');
}
function unhover(element) {
    element.setAttribute('src', 'https://s30.postimg.org/gxuty67jl/Hacker_Rank_logo.png');
}