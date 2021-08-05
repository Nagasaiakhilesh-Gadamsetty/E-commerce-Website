<%@page import = "java.io.*" %>
<%@page import = "java.sql.*" %>
<%
	String email = request.getParameter("email");
	boolean isEmailRegistered = false;
	boolean exceptionOccured = false;
	try{
		String connectionURL = "jdbc:mysql://localhost:3307/users";
		Connection connection = null;
		Class.forName("com.mysql.jdbc.Driver");
		connection = DriverManager.getConnection(connectionURL,"root","");
		String sql = "select * from user_details where email = "+ "'"+email+"'";
		Statement st = connection.createStatement();
		ResultSet rs = st.executeQuery(sql);
		boolean found = rs.next();

		if(found){
			isEmailRegistered = true;
		}
	}
	catch(Exception e){
		e.printStackTrace();
		exceptionOccured = true;
	}
%>
<%=isEmailRegistered%>||<%=exceptionOccured%>
