package Experiment_Codes;

import java.io.*;
import java.util.*;

class Employee {
    private String name;
    private String id;
    private String designation;
    private double salary;

    public Employee(String name, String id, String designation, double salary) {
        this.name = name;
        this.id = id;
        this.designation = designation;
        this.salary = salary;
    }

    public String toFileString() {
        return name + "|" + id + "|" + designation + "|" + salary;
    }

    public static Employee fromFileString(String line) {
        String[] parts = line.split("\\|");
        return new Employee(parts[0], parts[1], parts[2], Double.parseDouble(parts[3]));
    }

    public String toString() {
        return name + " | " + id + " | " + designation + " | " + salary;
    }
}

public class Experiment5 {
    private static final String FILE_NAME = "employees.txt";
    private static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Add Employee");
            System.out.println("2. Display All");
            System.out.println("3. Exit");
            System.out.print("\nEnter choice: ");
            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    addEmployee();
                    break;
                case 2:
                    displayAll();
                    break;
                case 3:
                    System.out.println("Exiting...");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice! Try again.");
            }
        }
    }

    private static void addEmployee() {
        System.out.print("Name: ");
        String name = sc.nextLine();

        System.out.print("ID: ");
        String id = sc.nextLine();

        System.out.print("Designation: ");
        String designation = sc.nextLine();

        System.out.print("Salary: ");
        double salary = sc.nextDouble();
        sc.nextLine();

        Employee emp = new Employee(name, id, designation, salary);

        try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILE_NAME, true))) {
            bw.write(emp.toFileString());
            bw.newLine();
            System.out.println("Employee added successfully!");
        } catch (IOException e) {
            System.out.println("Error writing to file.");
        }
    }

    private static void displayAll() {
        System.out.println("\nEmployee List:");
        try (BufferedReader br = new BufferedReader(new FileReader(FILE_NAME))) {
            String line;
            while ((line = br.readLine()) != null) {
                Employee emp = Employee.fromFileString(line);
                System.out.println(emp);
            }
        } catch (FileNotFoundException e) {
            System.out.println("No employees found.");
        } catch (IOException e) {
            System.out.println("Error reading file.");
        }
    }
}
