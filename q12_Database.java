
import java.sql.*;

public class q12_Database {

	public static void main(String[] args) throws ClassNotFoundException {
		Connection con = null;
		ResultSet res = null;
		Statement stmt = null;

		final String dburl = "jdbc:mysql://localhost:3306/";
		final String dbid = "root";
		final String dbpass = "root@1234";

		try {
			con = DriverManager.getConnection(dburl, dbid, dbpass);

			System.out.println("Connection established");

			String sql = "Select * from stud";
			stmt = con.createStatement();
			res = stmt.executeQuery(sql);
			while (res.next()) {

				System.out.println("Student Id is  " + res.getInt("StudentId"));
				System.out.println("Student Name is  " + res.getString("StudentName"));
				System.out.println("Student Phone is  " + res.getString("StudentPhone"));
			}
			con.close();
			res.close();
			stmt.close();

		}

		catch (SQLException se) {
			System.out.println(se.getMessage());
		}

		finally {
			System.out.println("All resources released");

		}
	}

}
