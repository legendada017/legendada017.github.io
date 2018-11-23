function playGuess11() {
	alert("генератор случайных чисел ");
	var p = parseInt(Math.random() * 100);
	while(true){
		var user = prompt("введите число от 0 до 100, для выхода нажмите 500");
		var user = parseInt(user);
		if(user == 500){
			break;
		}
		if(user > p){
			alert("Ваш ответ слишком большой");
		}
		else if(user < p){
			alert("Ваш ответ слишком мал");
		}
			else if(user == p){
			alert("Вы угадали");
			break;
		}
			else{
			alert("Вы не ввели число");
		}
	}
}