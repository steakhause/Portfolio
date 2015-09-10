var control = [
	//Control array[title, id, currentValue, maxValue, sound]
	{title:"Air Flow", id:"airFlow", currentValue: 0, maxValue: 2, sound: "Sounds/change-setting.mp3"},
	{title:"Water Flow", id: "waterFlow",currentValue: 0, maxValue: 2, sound:"Sounds/change-setting.mp3"},
	{title:"Special Sauce", id: "specialSauce", currentValue: 0, maxValue: 4, sound: "Sounds/change-setting.mp3"},
	{title: "Gas Valve", id: "gasValve", currentValue: 0, maxValue: 4, sound:"" },
	{title: "Mojo", id: "mojo", currentValue: 0, maxValue: 2, sound: ""},
	{title: "Swag", id: "swag", currentValue: 0, maxValue: 4, sound: ""}
];
var levelOne = 3;
var levelTwo = 0;
var currentLevel = levelOne;
var controlToChange = {};
var targetValue = 0;
var changedSlider = ["id", "value"];
var encouragement = [ 0, "Great job!", "That was correct", "I love you", "Looks like a promotion is in your future", "Your mother would be proud", "Would you like a cola?", "Keep going, you are doing great!", "Does it smell like updog in here?  It must be you."];
//Check for order compliance
function checkCompliance(){
	$("#instructions").css({color: "black"});
	if(controlToChange.id === changedSlider[0] && targetValue === Number(changedSlider[1])){
		console.log("Bingo");
		changeStatus(0);
		getNewInstructions();
		return true;
	}else{
		console.log("not compliant");
		changeStatus(1);
		getNewInstructions();
		return false
	}
}
//Silder Change Event
$(".mdl-js-slider, .mdl-js-switch").change(function(){
	changedSlider[1] = $(this).val();
	var $controls = $(".control");
	$(this).closest($controls).find(".indicator").html(Number(changedSlider[1]));	
	$("#sound_element").html("<audio autoplay><source src='Sounds/change-setting.mp3'></audio>");
	for(var i = 0; i < control.length; i++){
		if(control[i].id == $(this).attr('id')){
			changedSlider[0] = $(this).attr('id');
			control[i].currentValue = changedSlider[1];
			var compliance = checkCompliance();
		}
	}
})
//Opening sequence
$(document).ready(function(){
	$("#sound_element").html("<audio autoplay><source src='Sounds/siren-short.mp3'></audio>");
	$('#status').fadeOut(1000).fadeIn(500).delay(1000).fadeOut(1000).fadeIn(500).delay(1000).fadeOut(1000, function(){
		$("#instructions").css({color: "black"});
		$("#status").html("Complete the following actions to avoid meltdown...").fadeIn();
		getNewInstructions();
	})	
})
//Render new command
function getNewInstructions(){
	controlToChange = control[Math.floor(Math.random() * (control.length - currentLevel) + 1) - 1];
	console.log(controlToChange);
	targetValue = Math.floor(Math.random() * controlToChange.maxValue +1) -1;
	do{
		targetValue = Math.floor(Math.random() * controlToChange.maxValue +1) -1;
	} while (controlToChange.currentValue == targetValue);
	var newCommand = "Set " + controlToChange.title + " to " + targetValue; 
	setTimeout(function(){ 
		$("#instructions").html(newCommand).css({color: "forestgreen"});
	}, 2000);
}
//Change status
function changeStatus(x){
	if(x===0){
		var count = 0;
		if(encouragement[0] < (encouragement.length - 1)){
			encouragement[0] ++;
		}else{
			encouragement[0] = 1;
			currentLevel = levelTwo;
			$('.levelTwo').removeClass('hidden');
		}
		count = encouragement[0];
		$("#status").html(encouragement[count]);
	}else if(x === 1){
		$("#status").html("That was not right");
	}	
}