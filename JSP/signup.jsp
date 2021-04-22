<%@page import = "java.io.*" %>
<%@page import = "java.sql.*" %>
<%!
	String encrypt(String s){
		StringBuilder sb = new StringBuilder(s);
		int len = sb.length();
		if(len % 2 == 0){
		    for(int i=0;i<len/2;i+=2){
	    	    int ind_ele_from_end = len - i - 1;
		        char temp = sb.charAt(i);
		        sb.setCharAt(i,sb.charAt(ind_ele_from_end));
		        sb.setCharAt(ind_ele_from_end,temp);
		    }
		}
		else{
		    for(int i=0;i<len/2 - 1;i+=2){
	    	    int ind_ele_from_end = len - i - 1;
	        	char temp = sb.charAt(i);
		        sb.setCharAt(i,sb.charAt(ind_ele_from_end));
		        sb.setCharAt(ind_ele_from_end,temp);
		    }
		}
		return sb.toString();
	}
%>
<%
	String pass = request.getParameter("password");	
	String encrypPass = encrypt(pass);
	String firstName = request.getParameter("firstName");
	String lastName = request.getParameter("lastName");
	String userName = request.getParameter("userName");
	String email = request.getParameter("email");
	boolean isUserNameAvailable = true;
	boolean exceptionOccured = false;
	boolean emailRegistered = false;

	try{
		String connectionURL = "jdbc:mysql://localhost:3306/users";
		Connection connection = null;
		Class.forName("com.mysql.jdbc.Driver");
		connection = DriverManager.getConnection(connectionURL,"root","");
		String sql = "select * from user_details where username = "+ "'"+userName+"'";
		Statement st = connection.createStatement();
		ResultSet rs = st.executeQuery(sql);
		boolean found = rs.next();

		if(found){
			isUserNameAvailable = false;
		}
		else{
			sql = "select * from user_details where email="+"'"+email+"'";
			st = connection.createStatement();
			rs = st.executeQuery(sql);
			found = rs.next();
			if(found){
				emailRegistered = true;
			}
			else{
				st = connection.createStatement();
				st.executeUpdate("insert into user_details VALUES('"+firstName+"','"+lastName +"','"+userName+"','"+email+"','"+encrypPass+"','0')");
			}
		}	
	}catch(Exception e){
		exceptionOccured = true;
	}
%>
<%= isUserNameAvailable %>||<%= emailRegistered %>||<%= exceptionOccured %>