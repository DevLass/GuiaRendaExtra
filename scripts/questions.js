var perguntas = [{ pergunta: "Quanto você está disposto a investir?", A: "Muito (+1000)", B: "Pouco (-1000)" }, 
                 { pergunta: "Gostaria de fazer de maneira Online ou Offline?", A: "Online", B: "Offline" },
                 { pergunta: "Gostaria de vender um produto ou um serviço?", A: "Produto", B: "Serviço" },
                //  Condicional p Serviço
                 { pergunta: "Tem tempo para estudar sobre o seu futúro ofício?", A: "Tenho tempo", B: "Não tenho tempo" },
                //  Condicional p Produto
                 { pergunta: "Prefere vender um produto perecível ou não perecível?", A: "Perecível", B: "Não Perecível" }, 
                ]

var questionNumber = 1;
var questionTitle = document.getElementById("questionTitle");
var question = document.getElementById("question");
var a = document.getElementById("a");
var b = document.getElementById("b");
var aButton = document.getElementById("aButton");
var bButton = document.getElementById("bButton");
var nextButton = document.querySelector(".next");
var wrongtext = document.querySelector(".wrongtext");

var confirmAnswer = 0
var auxConfimAnswer = 0

var answerList = []


questionTitle.innerHTML =  'Questão ' +  questionNumber;
question.innerHTML = perguntas[0].pergunta;
a.innerHTML = perguntas[0].A;
b.innerHTML = perguntas[0].B;

function selectAnswer(u){
    confirmAnswer = 1

    a.style.fontWeight = "normal";
    b.style.fontWeight = "normal";


    if (u == 0){
        a.style.fontWeight = "bold";
    }else{
        b.style.fontWeight = "bold";
    }


    if (questionNumber == 1 ){
        if (u == 0){
            answerList[questionNumber-1] = "Muito"
        }else{
            answerList[questionNumber-1] = "Pouco" 
        }
    }else if (questionNumber == 2 ){
        if (u == 0){
            answerList[questionNumber-1] = "Online"
        }else{
            answerList[questionNumber-1] = "Offline" 
        }
    }else if (questionNumber == 3 ){
        if (u == 0){
            answerList[questionNumber-1] = "Produto"
        }else{
            answerList[questionNumber-1] = "Serviço" 
        }
    }else if (questionNumber == 4 ){
        if (answerList[2] == "Produto"){
            if (u == 0){
                answerList[questionNumber-1] = "Perecível"
            }else{
                answerList[questionNumber-1] = "Não Perecível" 
            }
        }else{
            if (u == 0){
                answerList[questionNumber-1] = "Tenho tempo"
            }else{
                answerList[questionNumber-1] = "Não tenho tempo" 
            }
        }
    }
}

function nextQuestion(){
    a.style.fontWeight = "normal";
    b.style.fontWeight = "normal";
    wrongtext.classList.remove('block');
    wrongtext.classList.add('none');

    if (auxConfimAnswer < 3){
        if (confirmAnswer == 1){
            auxConfimAnswer += 1;
            questionNumber += 1;


            if (questionNumber == 4) {
                if (answerList[2] == "Produto"){
                    auxConfimAnswer += 1
                }
            }

            questionTitle.innerHTML =  'Questão ' +  questionNumber;
            question.innerHTML = perguntas[auxConfimAnswer].pergunta;
            a.innerHTML = perguntas[auxConfimAnswer].A;
            b.innerHTML = perguntas[auxConfimAnswer].B;
            confirmAnswer = 0

        }else{
            nextButton.classList.add('wrong');
            setTimeout(function() {
                nextButton.classList.remove('wrong');
            }, 500);
            
            wrongtext.classList.remove('none');
            wrongtext.classList.add('block');

        }
    }else{
        localStorage.setItem('answerList', answerList);
        window.location.href = "https://devlass.github.io/GuiaRendaExtra/results.html";
        // ALTERAR NA HOSPEDAGEM
    }

}