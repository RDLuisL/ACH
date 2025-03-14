/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/
//Global:
var survey = []; //Bidimensional array: [ [1,3], [2,4] ]

//Switcher function:
$(".rb-tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});

//Save data:
$(".trigger").click(function(){
  //Empty array:
  survey = [];
  //Push data:
  for (i=1; i<=$(".rb").length; i++) {
    var rb = "rb" + i;
    var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
    //Bidimensional array push:
    survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
  };
  //Debug:
  debug();
});

//Debug:
function debug(){
  var debug = "";
  for (i=0; i<survey.length; i++) {
    debug += "Nº " + survey[i][0] + " = " + survey[i][1] + "\n";
  };
  alert(debug);
};
