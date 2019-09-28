var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p =document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");


function getComputerChoice(){
	const choices=['r','p','s'];
	const randomNumber = (Math.floor(Math.random() * 3));
	return choices[randomNumber];
}
//console.log(getComputerChoice();

function convertToWord(letter){
	if(letter === 'r') return "Rock";
	if (letter === 's') return "Paper";
	else return "Scissor";
}
function win(userChoice, computerChoice){
	//console.log("win");

	userScore++;
	//console.log(userScore);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord ="user".fontsize(3).sup();
	const smallCompWord =" comp".fontsize(3).sup();

	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}
function lose(userChoice,computerChoice){

	computerScore++;
	//console.log(userScore);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord ="user".fontsize(3).sup();
	const smallCompWord =" comp".fontsize(3).sup();

	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;

	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('red-glow');
	setTimeout(() =>  userChoice_div.classList.remove('red-glow'), 300);
}
function draw(userChoice,computerChoice){
	//console.log("draw");
	//console.log(userScore);
	
	const smallUserWord ="user".fontsize(3).sup();
	const smallCompWord =" comp".fontsize(3).sup();

	result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}. Tie `;

	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}
function game(userChoice){
	const computerChoice=getComputerChoice();
	//console.log("user choice => " +userChoice);

	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice);
			break; 
	}
}

function main(){
	rock_div.addEventListener('click',() => game("r"));

	paper_div.addEventListener('click',()=> game("p"));

	scissor_div.addEventListener('click',() => game("s"));
}

main();
