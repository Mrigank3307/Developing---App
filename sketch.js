var database , canvas , gameState , teacherButton , studentButton ,y , inputBox , index = 0 , responderCount , hello , video , responde , responder , array = [];
var groupName , responderCoun = [];
var responder1,responder2 , responder3 , responder4
var subject  , clash , x , form;
var studentInput , studentQuestion , studentAnswer , fq;
var questionInput , firstAns , ar;
var buttonIns , buttonIdeas;
var insTruck , insTruc , ide , ideas , buttonQ;

function setup() {
 canvas =  createCanvas(displayWidth - 2000 , displayHeight - 3000);
  database = firebase.database();
  gameState = "menu";
  y = 50;

   insTruc = createElement ('h3');
   insTruck = createElement ('h2');
   ide = createElement ('h2');
   ideas = createElement ('h3')

  buttonIns = createButton ("Instructions for the app");
buttonIns.style ('background-color' , "green")
buttonIns.style ( 'font-size' , '40px') 
buttonIns.style ('color' , "yellow" );
buttonIns.style ('size' , "100");

  teacherButton = createButton(" I am a teacher");
teacherButton.style ( 'font-size' , '40px') 
teacherButton.style ('background-color' , "black" );
teacherButton.style ('color' , "white" );
teacherButton.style ('size' , "100");

studentButton = createButton(" I am a student");
studentButton.style ( 'font-size' , '40px') 
studentButton.style ('background-color' , "black" );
studentButton.style ('color' , "white" );
studentButton.style ('size' , "100");
groupName = createGroup();
}

function draw() {
  background("white");  
  
 

  if (gameState === "menu") {
teacherButton.position (displayWidth/2 - 200 , displayHeight /2);
studentButton.position (displayWidth/2 - 200 , displayHeight /2 - 100);
buttonIns.position (displayWidth/2 - 275 , displayHeight/2 - 200)

teacherButton.mousePressed (() => {
  form = new Form();
  form.display();
  //worksheet = new createWorksheet ();
  gameState = "form"
 
hide();
teacherButton.hide();
studentButton.hide();

});

studentButton.mousePressed (() => {
  hide();

  studentWork = new studentWorksheet();
studentWork.startForm();

gameState = "studentForm"
//studentWork.getWorksheets();
});

buttonIns.mousePressed (() => {
  gameState = "instructions"
})

}

else if (gameState === "form") {
//form.Checked()

form.buttonSubmit.mousePressed (() => {
  form.Checked();
  worksheet = new createWorksheet ();
form.hi()
  gameState = "teacher";

})
}

else if (gameState === "instructions") {
  hide();
  
  insTruck.html ("Hello, Thank you for using this app")
  insTruck.position(10 , 10);

 
  insTruc.html ("There are 2 options in the app, You can either be a student or a teacher, First as a teacher you can make a worksheet. Students can sign in and attempt that worksheets, Right now as this is a prototype there is only one question but there can be more")
  insTruc.position (10,60);

ide.html ("Ideas for the app")
ide.position (10 , 160)

ideas.html ("Some ideas for the app are, (1) To integrate the apps into sort of games (2) Better animations in the app (3) Question Answers feature where students can ask and teachers can answer questions (4) A compete feature that allows you to copete with others")
ideas.position (10 , 210)
}

else if (gameState === "teacher")  {
  worksheet.display();

   worksheet.submitButton.mousePressed (() => {
    worksheet.readIndex(clash+subject + "Count");
   worksheet.process();
   
})
}
else if (gameState === "studentForm") {
  form.buttonSubmit.mousePressed (() => {
    form.Checked();
    studentAnswer = studentInput.value();
    studentWork = new studentWorksheet();
    studentWork.hide();
  form.hi();
  questionInput = createInput ("Enter answer...");
    gameState = "student";
    form.submit = createButton("Submit Your Answer");
    form.submit.position (10,110)
  })
  
}

else if (gameState === "student") {
 
  studentWork.getQuestion (1 , studentAnswer);
  studentWork.getAnswer (1 , studentAnswer);
 
  form.submit.mousePressed (()=> {
    studentWork.checking();
   // studentWork.check();
  })

 

}

 drawSprites();
  }

function write (whatecer , message , hello) {
  var what = whatecer
    database.ref(what).set({
    hello : message
    });
  }

    function hide () {
      studentButton.hide();
  teacherButton.hide();
  buttonIns.hide();
    }

 

    function writeIndex (count) {
      x = clash+subject + "Count"
      database.ref("count/" + x).update({
       Count:count 
      });   
    }
