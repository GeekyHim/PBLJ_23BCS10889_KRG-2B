import java.sql.*;
import java.util.Scanner;

public class EXPERIMENT7 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            Class.forName("org.postgresql.Driver");

            Connection con = DriverManager.getConnection(
                "jdbc:postgresql://localhost:5432/testdb",
                "postgres",
                "root"
            );

            con.setAutoCommit(false);

            while (true) {
                System.out.println("\n--- Product Management Menu ---");
                System.out.println("1. Add Product");
                System.out.println("2. View All Products");
                System.out.println("3. Update Product");
                System.out.println("4. Delete Product");
                System.out.println("5. Exit");
                System.out.print("Enter choice: ");

                int choice = sc.nextInt();

                if (choice == 1) {
                    PreparedStatement ps = con.prepareStatement(
                        "INSERT INTO Product (ProductID, ProductName, Price, Quantity) VALUES (?, ?, ?, ?)"
                    );
                    System.out.print("Enter Product ID: ");
                    ps.setInt(1, sc.nextInt());
                    System.out.print("Enter Product Name: ");
                    ps.setString(2, sc.next());
                    System.out.print("Enter Price: ");
                    ps.setDouble(3, sc.nextDouble());
                    System.out.print("Enter Quantity: ");
                    ps.setInt(4, sc.nextInt());

                    ps.executeUpdate();
                    con.commit();
                    System.out.println("Product Added Successfully!");
                }

                else if (choice == 2) {
                    Statement st = con.createStatement();
                    ResultSet rs = st.executeQuery("SELECT * FROM Product");

                    System.out.println("\nProductID | Name | Price | Quantity");
                    System.out.println("-----------------------------------");

                    while (rs.next()) {
                        System.out.println(
                            rs.getInt("ProductID") + " | " +
                            rs.getString("ProductName") + " | " +
                            rs.getDouble("Price") + " | " +
                            rs.getInt("Quantity")
                        );
                    }
                }

                else if (choice == 3) {
                    PreparedStatement ps = con.prepareStatement(
                        "UPDATE Product SET Price=?, Quantity=? WHERE ProductID=?"
                    );
                    System.out.print("Enter Product ID: ");
                    ps.setInt(3, sc.nextInt());
                    System.out.print("Enter New Price: ");
                    ps.setDouble(1, sc.nextDouble());
                    System.out.print("Enter New Quantity: ");
                    ps.setInt(2, sc.nextInt());

                    ps.executeUpdate();
                    con.commit();
                    System.out.println("Product Updated Successfully!");
                }

                else if (choice == 4) {
                    PreparedStatement ps = con.prepareStatement(
                        "DELETE FROM Product WHERE ProductID=?"
                    );
                    System.out.print("Enter Product ID: ");
                    ps.setInt(1, sc.nextInt());

                    ps.executeUpdate();
                    con.commit();
                    System.out.println("Product Deleted Successfully!");
                }

                else if (choice == 5) {
                    System.out.println("Exiting...");
                    break;
                }

                else {
                    System.out.println("Invalid Choice!");
                }
            }

            con.close();
            sc.close();
        } catch (Exception e) {
            System.out.println("Error! Rolling Back...");
            e.printStackTrace();
        }
    }
}
