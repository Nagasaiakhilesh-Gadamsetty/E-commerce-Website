<%@page import = "java.io.*" %>
<%@page import = "java.sql.*" %>
<%
	String user_name = request.getParameter("user_name");
	boolean isUserNameAvailable = true;
	boolean exceptionOccured = false;
	try{
		String connectionURL = "jdbc:mysql://localhost:3307/users";
		Connection connection = null;
		Class.forName("com.mysql.jdbc.Driver");
		connection = DriverManager.getConnection(connectionURL,"root","");
		String sql = "select * from user_details where username = "+ "'"+user_name+"'";
		Statement st = connection.createStatement();
		ResultSet rs = st.executeQuery(sql);
		boolean found = rs.next();

		if(found){
			isUserNameAvailable = false;
		}
	}
	catch(Exception e){
		e.printStackTrace();
		exceptionOccured = true;
	}
%>
<%=isUserNameAvailable%>||<%=exceptionOccured%>
