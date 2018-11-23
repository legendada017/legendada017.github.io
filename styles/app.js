function playGuess2(){
	alert("генератор случайных чисел ");
	var p1 = parseInt(Math.random() * 100);
	var p2 = parseInt(Math.random() * 100);
//	for(i = 0; i < 2; i++){
		while(true){

			var number1 = prompt("первый игрок введите число от 0 до 100, для выхода нажмите 500");
			var number2 = prompt("второй игрок введите число от 0 до 100, для выхода нажмите 500");
			var number1 = parseInt(number1);
			var number2 = parseInt(number2);
			if (isNaN(number1)){
				alert("первый игрок Вы не ввели число");
			}
			if (isNaN(number2)){
				alert("второй игрок Вы не ввели число");
				break;
			}
			if(number1 == 500){
				alert("первый игрок покинул игру, игра окончена");
				break;
			}
			if(number2 == 500){
				alert("второй игрок покинул игру, игра окончена");
				break;
			}
			if(number1 > p1){
				alert("первый игрок Ваш ответ слишком большой");
			}
			if(number2 > p2){
				alert("второй игрок Ваш ответ слишком большой");
			}
			if(number1 < p1){
				alert("первый игрок Ваш ответ слишком мал");
			}
			if(number2 < p2){
				alert("второй игрок Ваш ответ слишком мал");
			}
			if(number1 == p1){
				alert("первый игрок Вы угадали, Вы победили!");
				break;
			}
			if(number2 == p2){
				alert("второй игрок Вы угадали, Вы победили!");
				break;
			}
		}
//	} 
}