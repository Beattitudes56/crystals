//	<script type="text/javascript">

var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
//	return Math.floor(Math.random() * (max - min)) + min;
var matchHtml = "<p> " + targetNumber + "</p>";

var redValue = Math.floor(Math.random() * (12 - 1)) + 1;
var greenValue = Math.floor(Math.random() * (12 - 1)) + 1;
var blueValue = Math.floor(Math.random() * (12 - 1)) + 1;
var yellowValue = Math.floor(Math.random() * (12 - 1)) + 1;

var winCheck = false;
var userTotal = 0;

$(".red").click(function() {
	userTotal += redValue
	compareTotal();
})
$(".blue").click(function() {
	userTotal += blueValue
	compareTotal();
})
$(".green").click(function() {
	userTotal += greenValue
	compareTotal();
})
$(".yellow").click(function() {
	userTotal += yellowValue
	compareTotal();
})

function compareTotal() {
	if (userTotal === targetNumber) {
		winCheck = true;
	}
	else if (userTotal > targetNumber) {
		updateWl();
	}

}

function updateWl() {
	if (winCheck) {
		alert("You Win");
		//insert alert text for win/loss states with line break?
		// win alert text: "Mischief Managed"
		//lose alert text: Dead men tell no tales !
		//pass values back to html for total score, for wins/losses
		//pass values back to html for number to match update or edit html as needed 

		document.querySelector('#matchNumber').innerHTML = matchHtml; // JavaScript Document
