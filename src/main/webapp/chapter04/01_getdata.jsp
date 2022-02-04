<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- JSP에서 자바코드 구현하기 스크립트잇 -->
<% 
request.setCharacterEncoding("UTF-8");

String strName = request.getParameter("name");
String strMajor = request.getParameter("major");

out.println("이름 : " + strName + "<br/>");
out.println("학과 : " + strMajor + "<p/>");

%>

웹 브라우저 URL 주소 입력 부분 명시

</body>
</html>