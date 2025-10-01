import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class code1 {
    public static void main(String[] args) {
        // String driver = "com.mysql.cj.jdbc.Driver";
        // String url = "jdbc:mysql://localhost:3306/test"; 
        String driver = "org.postgresql.Driver";
        String url = "jdbc:postgresql://localhost:5432/test"; 
        String uName = "root"; 
        String uPass = "root"; 
        Statement st;
        String sql;
        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url,uName,uPass);
            st = conn.createStatement();
            sql = "Insert into TBL_table values(10889,'Himanshu')";
            st.executeUpdate(sql);
            System.out.println("OPERATION COMPLETE");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        }

        // try{
        //     sql = "Select * from TBL_table";
        //     Class.forName(driver);
        //     Connection conn = DriverManager.getConnection(url,uName,uPass);
        //     st = conn.createStatement();
        //     st.executeQuery(sql);
        // }catch(SQLException e){
        //     e.printStackTrace();
        // }catch (ClassNotFoundException e) {
        //     e.printStackTrace();
        // }
        
    }
}
