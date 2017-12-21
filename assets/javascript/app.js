//use question game from javascript - last exercise
// and use fridge magnet game

//have one array ea of possible answers where all possibilities are in index[i] or do I have an array each of answers for each question
var quesAns = {
	questArray: [{
		question: "Who played Sandy, the leading female role, in the movie Grease?",
		answers: ["Carrie Fisher", "Olivia Newton-John", "Susan Dey", "Marie Osmond"],
		answerKey: "Olivia Newton-John"
	}, {
		question: "Which pill did Neo swallow in the movie The Matrix?",
		answers: ["blue", "purple", "red",
		"none"],
		answerKey: "red"
	}, {
		question: "What actor played the killer robot in the Terminator?",
		answers: ["Arnold Schwarzenegger", "It was a real robot", "Hulk Hogan", "Jesse Ventura"],
		answerKey: "Arnold Schwarzenegger"
	}, {
		question: "In the movie John Wick, what incident made the John start killing people?",
		answers: ["someone stole his car", "someone blew up his house", "someone killed his dog", "someone kissed him"],
		answerKey: "someone killed his dog"
	}, {
		question: "Who played Groot in the Guardians of the Galaxy?",
		answers: ["Arnold Schwarzenegger", "Sylvestor Stallone", "Jean-Claude Van Damme", "Vin Diesel"],
		answerKey: "Vin Diesel",
	}, {
		question: "In the movie Harry Potter, which  house does Hat choose for Harry Potter?",
		answers: [ "Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"],
		answerKey: "Gryffindor"
	}, {
		question: "In The Bourne Supremacy, Jason Bourne detinates a house using what supplies?",
		answers: ["gun, string and a sock", "gas, magazine and a toaster", "cigarette, toilet paper and newspaper", "popcorn popper, oil and a faulty wire"],
		answerKey: "gas, magazine and a toaster"
	}, {
		question: "In the movie Payback, how much money did Porter (played by Mel Gibson) want?",
		answers: ["$140,000", "$100,000", "$70,000", "$300,000"],
		answerKey: "$70,000"
	}]
};

var answerCheck = [];
var index = 0;
var incorrectScore = 0;
var correctScore = 0;
var number = 30;
var intervalId;

//do I randomize the possible answer order

//all this in one function?
//need to work count down

//need to put up question and possible answers


//=====need to tell it in a new function that you need to check if it should go to next question========

function start() {
	//empty divs
	//empty countdown
	//game name and start button only
	$(".timer").empty();
	$(".score").empty();
	$(".question").empty();
	$(".multiplechoice").empty();
	$(".correct-answer").empty();
	$(".incorrect-answer").empty();

	var startBtn = $("<button>");
	startBtn.addClass("btn btn-danger");
	startBtn.text("Begin Game");
	startBtn.click(function() { renderQuestion();});
	$(".start-button").append(startBtn);
}

function renderQuestion() {
//change this too to match ================ new code below

    $(".start-button").empty();
    $(".correct-answer").empty();
    $(".question").text(quesAns.questArray[index].question);
    console.log(quesAns.questArray[index].question);
    $(".multiplechoice").empty();

    for (var i=0; i<quesAns.questArray[index].answers.length; i++) {

    	var answerBtn = $("<button>");
    	answerBtn.addClass("btn btn-dark choice");
    	answerBtn.attr("data-answer", quesAns.questArray[index].answers[i]);
    	answerBtn.text(quesAns.questArray[index].answers[i]);
    	$(".multiplechoice").append(answerBtn);
    	console.log(quesAns.questArray[index].answers[i]);

    };

    timer();
    console.log(quesAns.questArray[index].answerKey);

}

function timer() {
	number = 15;
	intervalId = setInterval(decrement, 1000);
	$(".timer").html("Time remaining: " + number);

}

//     //  The stop function
// function stop() {
//   clearInterval(intervalId);
//   continueGame();
//   //renderQuestion(); 
//   //had this first but this doesnt check index against array so never gets to endGame
  
// }


function decrement() {

	//  Decrease number by one.
	number--;

	//  Show the number in the #show-number tag.
	$(".timer").html("Time remaining: " + number);


	//  Once number hits zero...
	if (number === 0) {

		//  ...run the stop function.====cannot run stop function here
		// stop();
		//try this instead:
		clearInterval(intervalId);
		//  Alert the user that time is up.
		$(".timer").html("Time is up!");
		//timer still comes back and counts down to -5
		$(".correct-answer").html("The correct answer was: " + quesAns.questArray[index].answerKey);
		index++
		console.log(index);
		setTimeout(continueGame, 1000 * 3);

	}
}

function  continueGame() {	
	//had stop() here before but it created a loop
	clearInterval(intervalId);
	// If there are no more questions, stop the function.
	if (index === quesAns.questArray.length) {
		endGame();
	}

	// If they guess the correct answer, increase and update score, alert them they got it right. and update index
	else {
		renderQuestion();
	}
}

function endGame() {
	$(".timer").empty();
	$(".score").empty();
	$(".question").empty();
	$(".multiplechoice").empty();
	$(".correct-answer").empty();
	$(".correct-answer").text("You had " + correctScore + " correct answers.");
	$(".incorrect-answer").html("You had " + incorrectScore + " incorrect answers.");
	setTimeout(start, 1000 * 5);
}

//======================Main Game played here==============================
//need to listen for click event
start();


//create on-click event on the buttons
$(".multiplechoice").on("click", ".choice", function(event) {

	//want to grab the value of button clicked and give it the name answerCheck
	var answerCheck = $(this).text();
	console.log(answerCheck);
	console.log(quesAns.questArray[index].answerKey);

	if (answerCheck === quesAns.questArray[index].answerKey) {
		// alert("Correct!");
		correctScore++
		$(".correct-answer").html("That is correct!");
		clearInterval(intervalId);
	    index++
	    setTimeout(continueGame, 1000 * 3);


	}
	// If wrong, alert them they are wrong.
	else {
		// alert("Wrong!");
		$(".correct-answer").html("The correct answer was: " + quesAns.questArray[index].answerKey);
		incorrectScore++
		clearInterval(intervalId);
		index++
		setTimeout(continueGame, 1000 * 3);
		
	}

	// Increment the index variable and call the render question

})

//if correct answer then add to correct answers total













