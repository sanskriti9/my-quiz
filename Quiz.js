class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("blue")
    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(30);
    text(" !!RESULT OF THE QUIZ!!",350,50)
    text("---------------------------------",350,70)
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      fill("pink");
      textSize(20);
      text("*NOTE : Contestant who answered correct are highlighted in green color",130,230)
    
var display = 230
    //write condition to check if contestantInfor is not undefined
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else fill("red");
    
    //write code to add a note here

    //write code to highlight contest who answered correctly
    display+=30
    textSize(20);
    text(allContestants[plr].name+":"+allContestants[plr].answer,250,display)
    }}
  }

}
