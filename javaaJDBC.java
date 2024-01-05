import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;
public class javaaJDBC {

	public static void main(String[] args) throws ClassNotFoundException {
		Connection con=null;
		Statement stmt = null;
		try
		{
			// load oracle driver
			Class.forName("oracle.jdbc.driver.OracleDriver");
			// connect using Thin driver
			con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","manager");
			System.out.println("Connection established");
			
			Scanner s = new Scanner(System.in);
			System.out.println("Enter the student id :");
			int stud_id = s.nextInt();
			
			System.out.println("Enter the student name :");
			String stud_name = s.next();
			
			System.out.println("Enter the student phone number  :");
			int stud_phone = s.nextInt();
			
			String insert = "insert into GM_Student values(" + stud_id + ",'" + stud_name + "'," + stud_phone +")";
			stmt = con.createStatement();
			stmt.executeUpdate(insert);
			
			System.out.println("Data inserted.");
			
		}
		catch(SQLException se)
		{
			System.out.println(se.getMessage());
		}
		
		finally
		{
			System.out.println("All resources released");	
		}

	}

}