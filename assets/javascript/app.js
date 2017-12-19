//use question game from javascript - last exercise
// and use fridge magnet game

//have one array of questions
//have one array ea of possible answers where all possibilities are in index[i] or do I have an array each of answers for each question
var quesAns = ["How much money did guy from Payback want to be paid back?",
	"How did he do that?",
	"When did she do that?",
	"Which one did this happen in?"];


// one: {
// 	questionOne: "Who was the actor that played Danny in Grease?",
// 	answersOne: "John Travolta", "blah2", "blah3", "blah4"
// 	answerOneKey: "John Travolta"
// 	},

// two: {
// 	questionTwo: "Which pill did Neo swallow in the movie The Matrix?",
// 	answersTwo: "the blue pill", "the purple pill", "the red pill",
// 	"he chose neither pill"
//	answerTwoKey: "the red pill"
// 	},

// three: {
// 	questionThree: "What actor played the killer robot in the movie the Terminator",
// 	answersThree: "Arnold Schwarzenegger", "It was a real robot", "Hulk Hogan", "Jesse Ventura",
//  answerThreeKey: "Arnold Schwarzenegger"
// 	},

// four: {
// 	questionFour: "In the movie John Wick, what incident made the John go back to his previous job of killing people?",
// 	answersFour: "Someone stole his car.", "Someone killed his dog.", "Someone blew up his house.", "Someone kissed him."
//  answerFourKey: "Someone killed his dog."
// 	},

// five: {
// 	questionFive: "Who played Groot in the Guardians of the Galaxy?",
// 	answersFive: "Vin Diesel", "Arnold Schwarzenegger", "Sylvestor Stallone", "Jean-Claude Van Damme"
//  answerFiveKey: "Vin Diesel"
// 	},

// six: {
// 	questionSix: "Which one of the four houses does Hat choose for Harry Potter?",
// 	answersSix: "Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"
//  answerSixKey: "Gryffindor"
// 	},

//seven: {
// 	questionSeven: "In The Bourne Supremacy, Jason Bourne detinates a house to blow up using what supplies?",
// 	answersSeven: "Gas, magazine and a toaster", "Gun, a string and a ", "A cigarette, toilet paper and stove, and newspaper", "A popcorn popper, oil and a faulty wire"
//  answerSevenKey: "Gas, magazine and a toaster"
// 	},

// eight: {
// 	questionEight: "In the movie Payback, how much money did Porter (played by Mel Gibson) want to be paid back?",
// 	answersOne: "$140,000", "$100,000", "$70,000", "$300,000"
// 	answerOneKey: "$70,000"
// 	},
// 	]
// };

// var questionsArray = [one.questionOne, two.questionTwo, three.questionThree, four.questionFour, five.questionFive, six.questionSix, seven.questionSeven, eight.questionEight];


var answers =["$140,000", "$100,000", "$70,000", "$300,000"];

//do I randomize the possible answer order

//all this in one function?
//need to work count down

//need to put up question and possible answers
function playGame() {

//need to listen for click event
//only allow one answer, not multiple
//if correct answer then add to correct answers total
$(".question").text(quesAns[0]);
//use frig to figure out buttons
	for (var i=0;i<4; i++) {
		var answerBtn = $("<button>");
		answerBtn.addClass("btn btn-dark");
		answerBtn.attr("data-answer", answers[i]);
		answerBtn.text(answers[i]);
		$(".multiplechoice").append(answerBtn);
		// answerBtn.click(answerCheck);

		console.log(answers[i]);


	};
//if answer not correct then add to incorrect answers total
};

//need to have it go through all 5 questions
// function renderQuestion() {
// 	if (questionIndex <= (questionsArray.length - 1)) {
//           document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
//         }
//         // If there aren't, render the end game screen.
//         else {
//           document.querySelector("#question").innerHTML = "Game Over!";
//           document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
//         }
// }

playGame();

// function answerCheck() {
// 	crystalValue = ($(this).attr("data-answer"));
//     crystalValue = parseInt(crystalValue);

//     counter += crystalValue;
   


// 	if answerBtn === answerKey {
// 		counterCorrect++;
// 	}

// 	else {
// 		counterIncorrect++;
// 	}

//if all questions done then
	// $(".counter-correct").text(counterCorrect);
	//$(".counter-incorrect").text(coutnerIncorrect);
    

// reviewForMatch();

//}
