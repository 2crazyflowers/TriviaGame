//use question game from javascript - last exercise
// and use fridge magnet game

//have one array ea of possible answers where all possibilities are in index[i] or do I have an array each of answers for each question

var quesAns = {
questArray: [{
	question: "Who was the actor that played Sandy in Grease?",
	answers: ["Carrie Fisher", "Olivia Newton-John", "Susan Dey", "Marie Osmond"],
	answerKey: "Olivia Newton-John"
	}, {
	question: "Which pill did Neo swallow in the movie The Matrix?",
	answers: ["the blue pill", "the purple pill", "the red pill",
	"he chose neither pill"],
	answerKey: "the red pill"
	}, {
	question: "What actor played the killer robot in the movie the Terminator",
	answers: ["Arnold Schwarzenegger", "It was a real robot", "Hulk Hogan", "Jesse Ventura"],
 	answerKey: "Arnold Schwarzenegger"
	}, {
	question: "In the movie John Wick, what incident made the John go back to his previous job of killing people?",
	answers: ["Someone stole his car.", "Someone killed his dog.", "Someone blew up his house.", "Someone kissed him."],
 	answerKey: "Someone killed his dog."
	}, {
	question: "Who played Groot in the Guardians of the Galaxy?",
	answers: ["Vin Diesel", "Arnold Schwarzenegger", "Sylvestor Stallone", "Jean-Claude Van Damme"],
 	answerKey: "Vin Diesel"
	}, {
	question: "Which one of the four houses does Hat choose for Harry Potter?",
	answers: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
 	answerKey: "Gryffindor"
	}, {
	question: "In The Bourne Supremacy, Jason Bourne detinates a house to blow up using what supplies?",
	answers: ["Gas, magazine and a toaster", "Gun, a string and a ", "A cigarette, toilet paper and stove, and newspaper", "A popcorn popper, oil and a faulty wire"],
	answerKey: "Gas, magazine and a toaster"
	}, {
	question: "In the movie Payback, how much money did Porter (played by Mel Gibson) want to be paid back?",
	answers: ["$140,000", "$100,000", "$70,000", "$300,000"],
	answerKey: "$70,000"
	}]
};


var index = 0;

//do I randomize the possible answer order

//all this in one function?
//need to work count down

//need to put up question and possible answers


//=====need to tell it in a new function that you need to check if it should go to next question========

function renderQuestion() {
//change this too to match ================ new code below
    // if (questionIndex <= (quesAns.questArray.length - 1)) {
    //   document.querySelector(".question").innerHTML = quesAns.questArray[index];

		$(".question").text(quesAns.questArray[index].question);
		console.log(quesAns.questArray[index].question);
	    

	    for (var i=0; i<4; i++) {
			

			var answerBtn = $("<button>");
			answerBtn.addClass("btn btn-dark");
			answerBtn.attr("data-answer", quesAns.questArray[index].answers);
			answerBtn.text(quesAns.questArray[index].answers);
			$(".multiplechoice").append(answerBtn);
			// answerBtn.click(answerCheck);

			console.log(quesAns.questArray[index].answers);
			console.log(quesAns.questArray[index].answerKey)
		};
	}
    // If there aren't, render the end game screen.
  //   else {
		// document.querySelector(".question").innerHTML = "Game Over!";
		// document.querySelector(".score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
  //   }

//need to listen for click event
//only allow one answer, not multiple
//if correct answer then add to correct answers total



// //use frig to figure out buttons
	
	



renderQuestion();
// updateScore();

document.onkeyup = function(event) {

	// If there are no more questions, stop the function.
	if (index === questionsArray.length) {
	  return;
	}


	// If they guess the correct answer, increase and update score, alert them they got it right. and update index
	if (userInput === quesAns.questArray[index].answerKey) {
		    alert("Correct!");
		    correctScore++
		    // updateScore();
		    console.log(correctScore);
		    

	}
	// If wrong, alert them they are wrong.
	else {
		alert("Wrong!");
		incorrectScore++
	}

		// Increment the index variable and call the render question

		index++;
		console.log(index);
		renderQuestion();

	}






