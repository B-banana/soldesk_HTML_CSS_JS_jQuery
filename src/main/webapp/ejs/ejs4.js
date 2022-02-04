var id = prompt('id를 입력하세요');
var pw = prompt('pw를 입력하세요');

if (id == 'std01' && pw == '1111') {
	location.href = "login.html";
} else if (id == 'std02' && pw == '2222') {
	location.href = "login.html";
} else if (id == 'std03' && pw == '3333') {
	location.href = "login.html";	
} else {
	location.href = "error.html";
}