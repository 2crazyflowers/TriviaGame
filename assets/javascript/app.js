//use question game from javascript - last exercise
// and use fridge magnet game

//have one array ea of possible answers where all possibilities are in index[i] or do I have an array each of answers for each question

var quesAns = {
one: [{
	question: "Who was the actor that played Sandy in Grease?",
	answers: ["Carrie Fisher", "Olivia Newton-John", "Susan Dey", "Marie Osmond"],
	answerKey: "Olivia Newton-John"
	}],

two: [{
	question: "Which pill did Neo swallow in the movie The Matrix?",
	answers: ["the blue pill", "the purple pill", "the red pill",
	"he chose neither pill"],
	answerKey: "the red pill"
	}],

three: [{
	question: "What actor played the killer robot in the movie the Terminator",
	answers: ["Arnold Schwarzenegger", "It was a real robot", "Hulk Hogan", "Jesse Ventura"],
 	answerKey: "Arnold Schwarzenegger"
	}],

four: [{
	question: "In the movie John Wick, what incident made the John go back to his previous job of killing people?",
	answers: ["Someone stole his car.", "Someone killed his dog.", "Someone blew up his house.", "Someone kissed him."],
 	answerKey: "Someone killed his dog."
	}],

five: [{
	question: "Who played Groot in the Guardians of the Galaxy?",
	answers: ["Vin Diesel", "Arnold Schwarzenegger", "Sylvestor Stallone", "Jean-Claude Van Damme"],
 	answerKey: "Vin Diesel"
	}],

six: [{
	question: "Which one of the four houses does Hat choose for Harry Potter?",
	answers: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
 	answerKey: "Gryffindor"
	}],

seven: [{
	question: "In The Bourne Supremacy, Jason Bourne detinates a house to blow up using what supplies?",
	answers: ["Gas, magazine and a toaster", "Gun, a string and a ", "A cigarette, toilet paper and stove, and newspaper", "A popcorn popper, oil and a faulty wire"],
	answerKey: "Gas, magazine and a toaster"
	}],

eight: [{
	question: "In the movie Payback, how much money did Porter (played by Mel Gibson) want to be paid back?",
	answers: ["$140,000", "$100,000", "$70,000", "$300,000"],
	answerKey: "$70,000"
	}],	
};

// var questionsArray = [quesAns.one.question, quesAns.two.question, quesAns.three.question, quesAns.four.question, quesAns.five.question, quesAns.six.question, quesAns.seven.question, quesAns.eight.question];

//do I randomize the possible answer order

//all this in one function?
//need to work count down

//need to put up question and possible answers
function playGame() {

//need to listen for click event
//only allow one answer, not multiple
//if correct answer then add to correct answers total


	$(".question").text(quesAns.one[0].question);
	console.log(quesAns.one[0].question);

// //use frig to figure out buttons
	
	for (var i=0; i<4; i++) {
		

		var answerBtn = $("<button>");
		answerBtn.addClass("btn btn-dark");
		answerBtn.attr("data-answer", quesAns.one[0].answers[i]);
		answerBtn.text(quesAns.one[0].answers[i]);
		$(".multiplechoice").append(answerBtn);
		// answerBtn.click(answerCheck);

		console.log(quesAns.one[0].answers[i]);
	};
}



playGame();

