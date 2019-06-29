

var questions = [
        {
    question: "1.  Who was the 45th President?", 
    answers: ["a.  Barrack Obama  "  , "b.  Donald Trump  "  , "c.  Hillary Clinton  "  ],   
    correct: "b.  Donald Trump  ",
    userResponse: null
    // photo: "images/donald.png"
    },

    {
    question: "2. Who was the first foreign born presidential candidate in a mainstream party?", 
    answers: ["a.   Ted Cruz  ", "b.   Barrack Obama  ", "c.  John McCain  "],
    correct: "c.  John McCain  ",
    userResponse: null
  //  photo:
    },
        
    {
    question: "3. Please choose the constitutional amendment that is said to protect the other 9?", 
    answers: ["a.   First Amendment    ", "b.   Second Amendment    ", "c.   Fifth Amendment    "],
    correct: "b.   Second Amendment    ",
    userResponse: null
    // photo:
    },
];
$('.question0').append(questions[0].question);
$('.question1').append(questions[1].question);
$('.question2').append(questions[2].question);
$('.answer0').append(questions[0].answers);
$('.answer1').append(questions[1].answers);
$('.answer2').append(questions[2].answers);
$('.correct0').append(questions[0].correct);
$('.correct1').append(questions[1].correct);
$('.correct2').append(questions[2].correct);


var timeleft = 30;
var timer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Finished"
    $('#submit').click()
  }
}, 1000);
        
$("#countdown").text(timeleft)
// The timer function closing

// button to submit the quiz when completed, programmed in w3 shchools toggle function
$(document).ready(function(){
 $('button[class*="question"]').click(function(){
   var response =$(this).val();
   var questionIndex = $(this).attr('data-question')
   questions[questionIndex].userResponse = response
 })
  $("#submit").click(function(){
    $("#submitted").toggle();

//quiz grader
console.log(questions);


var score = 0;

for(var i=0; i < questions.length; i++){
  var response = questions[i].userResponse;
 if(response == questions[i].correct){
   score++;
   alert("Correct!");
 } else{
   alert("Wrong");
 }
}
alert("you got " + score + "/" + questions.length);

   
  });
});

