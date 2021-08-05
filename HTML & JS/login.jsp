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
	String user_email = request.getParameter("user");
	String pass = request.getParameter("password");	
	String encrypPass = encrypt(pass);
	String password = "";
	boolean loginSuccess = false;

	try{
		String connectionURL = "jdbc:mysql://localhost:3307/users";
		Connection connection = null;
		Class.forName("com.mysql.jdbc.Driver");
		connection = DriverManager.getConnection(connectionURL,"root","");
		String sql = "select password from user_details where username = "+ "'"+user_email+"'"+"OR email = "+ "'"+user_email+"'";
		Statement st = connection.createStatement();
		ResultSet rs = st.executeQuery(sql);
		boolean found = rs.next();

		if(found){
			password = rs.getString("password");
			if(encrypPass.equals(password)){
				loginSuccess = true;
			}
		}
		
	}catch(Exception e){
		loginSuccess = false;
	}
%>
<%=loginSuccess%>