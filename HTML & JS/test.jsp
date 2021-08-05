<jsp:useBean id="enc" class="com.gcd.find_gcd"/>
<%
	String s = request.getParameter("name");
	out.println(enc.gcd(1,9));
%>