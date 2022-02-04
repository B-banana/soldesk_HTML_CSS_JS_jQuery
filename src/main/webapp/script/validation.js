window.addEventListener('load', function() {

	clearMessages();
	
	const formElem = document.querySelector('form')
	formElem.onsubmit = submitForm;
	
	const selectInput = document.querySelector('select[name = "birth-month"]');
	
	for (var i = 1; i <= 12; i++) {
		let option = document.createElement('option');
		option.innerHTML = i + "월";
		option.value = i;
		
		selectInput.appendChild(option);
	}
});


// 기본 메시지를 삭제
function clearMessages() {
	const messages = document.getElementsByClassName('alert-message');
	for (let i = 0; i < messages.length; i++) {
		messages[i].style.display='none';
	}
};
// 메시지 출력
function showMessages(inputElement, message) {
	const messageElem = inputElement.parentNode.querySelector('span');
	messageElem.style.display = 'inline';
	messageElem.innerText = message;

	inputElement.focus();
};

function submitForm() {
	
	//account info
	const accountInput = document.querySelector('input[name = "account"]');
	const passwordInput = document.querySelector('input[name = "password"]');
	const passwordconfirmInput = document.querySelector('input[name = "password2"]');
	
	//select, radio, checkbox
	const nameInput = document.querySelector('input[name = "name"]');
	const radioInput = document.querySelector('input[name = "gender"]:checked');
	const checkboxInput = document.querySelector('input[name = "agree"]');
	
	const selectmonthInput = document.querySelector('select[name = "birth-month"]');
	const yearInput = document.querySelector('input[name = "birth-year"]');
	const dayInput = document.querySelector('input[name = "birth-day"]');

	/*console.log(accountInput.value);
	console.log(passwordInput.value);
	console.log(passwordconfirmInput.value);
	
	console.log(nameInput.value);
	console.log(radioInput.value);
	console.log(checkboxInput.value);
	
	console.log(selectmonthInput.value);
	console.log(yearInput.value);
	console.log(dayInput.value);*/
	
	let success = true;
	
	if(accountInput.value.length < 6) {
		showMessages(accountInput, "계정은 6자리 이상이어야 합니다.");
		success = false;
		}
	
	if(passwordInput.value.length < 10) {
		showMessages(passwordInput, "비밀번호는 10자리 이상이어야 합니다.");
		success = false;	
	}
	
	if(passwordconfirmInput.value != passwordInput.value) {
		showMessages(passwordconfirmInput, "비밀번호가 일치하지 않습니다.");
		success = false;	
	}
	
	return success;
};