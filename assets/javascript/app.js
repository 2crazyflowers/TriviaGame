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


//this function is only used to start the game the first time, not to play again
function start() {

	//put start game button for user to click
	var startBtn = $("<button>");
	startBtn.addClass("btn btn-danger");
	startBtn.text("Begin Game");
	startBtn.click(function() { renderQuestion();});
	$(".start-button").append(startBtn);

}

//this puts question and multiple choice answer buttons to html
function renderQuestion() {
	
	//empty out html to add new information
    $(".start-button").empty();
    $(".correct-answer").empty();
    $(".question").html(quesAns.questArray[index].question);
    console.log(quesAns.questArray[index].question);
    $(".multiplechoice").empty();
    $(".incorrect-answer").empty();

    //to loop through all possible answers, puts them into buttons and append them to the browser
    for (var i=0; i<quesAns.questArray[index].answers.length; i++) {

    	var answerBtn = $("<button>");
    	answerBtn.addClass("btn btn-dark choice");
    	answerBtn.attr("data-answer", quesAns.questArray[index].answers[i]);
    	answerBtn.text(quesAns.questArray[index].answers[i]);
    	$(".multiplechoice").append(answerBtn);
    	console.log(quesAns.questArray[index].answers[i]);

    };

    //starts countdown
    timer();
    console.log(quesAns.questArray[index].answerKey);

}

//countdown function, gives user 15 seconds to answer the question 
function timer() {
	number = 15;
	intervalId = setInterval(decrement, 1000);
	$(".timer").html("Time remaining: " + number);

}

//decrement/to decrease countdown number and it shows on broswer
function decrement() {
	//  Decrease number by one.
	number--;

	//  Show the number in the #show-number tag.
	$(".timer").html("Time remaining: " + number);


	//  Once number hits zero...
	if (number === 0) {
		
		//creating a stop function did not work so put clearIntervals where I needed them
		//else infinite loops were created in the functions
		
		clearInterval(intervalId);
		
		//  Alert the user that time is up.
		$(".timer").html("Time is up!");
		$(".multiplechoice").empty();
		$(".correct-answer").html("The correct answer was: " + quesAns.questArray[index].answerKey);
		index++
		
		//this allows user to see correct answer before continuing the game and rendering another question
		setTimeout(continueGame, 1000 * 3);

	}
}

//this function checks to see if all the questions have been asked, if yes it starts endGame function, if not it goes to render the next question
function  continueGame() {	
	
	//had stop() here before but it created a loop
	clearInterval(intervalId);
	
	// if there are no more questions, stop the function
	if (index === quesAns.questArray.length) {
		endGame();
	}

	// if there are more questions, countinue game and render another question/possible anwers to html
	else {
		renderQuestion();
	}
}

//created endGame function to empty out html, let the user know their count of correct and incorrect answers and give an option to play again
function endGame() {
	
	//empty out html
	$(".timer").empty();
	$(".score").empty();
	$(".question").empty();
	$(".multiplechoice").empty();
	$(".correct-answer").empty();

	//give user there incorrect/correct answer count
	$(".correct-answer").html("You had " + correctScore + " correct answers.");
	$(".incorrect-answer").html("You had " + incorrectScore + " incorrect answers.");
	
	//needed to reset index here if the user chose to restart game
	index = 0;
	
	//play again button
	var startBtn = $("<button>");
	startBtn.addClass("btn btn-danger");
	startBtn.text("Play Again");
	startBtn.click(function() { renderQuestion();});
	$(".start-button").append(startBtn);
}

//=============Main Game played here==============
//start game function
start();

//create on-click event on the multiple choice buttons
$(".multiplechoice").on("click", ".choice", function(event) {

	//grab the value of button clicked and give it the name answerCheck
	var answerCheck = $(this).text();
	console.log(answerCheck);
	console.log(quesAns.questArray[index].answerKey);

	//checks to see if user answer matches correct answer from answerKey
	//adds to correctScore counter, add to index to move to next question, and continue game
	if (answerCheck === quesAns.questArray[index].answerKey) {
		// alert("Correct!");
		correctScore++
		$(".correct-answer").html("That is the correct answer!");
		$(".multiplechoice").empty();
		$(".timer").empty();
		clearInterval(intervalId);
	    index++
	    setTimeout(continueGame, 1000 * 2);


	}
	// If it is the wrong answer let them know correct answer, log to incorrectScore counter, add to index to move to next question, and continue game
	else {
		// alert("Wrong!");
		$(".correct-answer").html("The correct answer was: " + quesAns.questArray[index].answerKey);
		$(".multiplechoice").empty();
		$(".timer").empty();
		incorrectScore++
		clearInterval(intervalId);
		index++
		setTimeout(continueGame, 1000 * 3);
		
	}
})





