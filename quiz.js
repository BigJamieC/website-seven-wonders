var questions = {
    0:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    1:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    2:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    3:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    4:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    5:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    6:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    7:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    8:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    },
    9:{
        "question":"This is the question",
        "answer1":"This is answer 1",
        "answer2":"This is answer 2",
        "answer3":"This is answer 3",
        "answer4":"This is answer 4"
    }
}

var quiz = document.querySelector('#quiz').children
var score = 0
var currentQuestion = 0

function newQuestion(questionNumber){
    let question = questions[questionNumber]
    quiz[0].innerHTML = question["question"]
    quiz[1].innerHTML = question["answer1"]
    quiz[2].innerHTML = question["answer2"]
    quiz[3].innerHTML = question["answer3"]
    quiz[4].innerHTML = question["answer4"]
}

function answer(element){
    score += parseInt(element.value)
    currentQuestion += 1
    if(currentQuestion > 9){
        result()
    } else {
        newQuestion(currentQuestion)
    }
}

function result(){
    quiz[1].disabled = true
    quiz[2].disabled = true
    quiz[3].disabled = true
    quiz[4].disabled = true
    score *= 4
    if(score < 55){
        document.querySelector("#result p").innerHTML = "Pyramids"
    } else if(score < 70){
        document.querySelector("#result p").innerHTML = "Great Wall of China"
    } else if(score < 85){
        document.querySelector("#result p").innerHTML = "Chichen Itza"
    } else if(score < 100){
        document.querySelector("#result p").innerHTML = "Colosseum"
    } else if(score < 115){
        document.querySelector("#result p").innerHTML = "Petra"
    } else if(score < 130){
        document.querySelector("#result p").innerHTML = "Machu Picchu"
    } else if(score < 145){
        document.querySelector("#result p").innerHTML = "Christ the Redeemer"
    } else {
        document.querySelector("#result p").innerHTML = "Taj Mahal"
    }
}

newQuestion(currentQuestion)