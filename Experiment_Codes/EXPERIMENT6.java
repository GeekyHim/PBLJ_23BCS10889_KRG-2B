import java.util.*;
import java.util.stream.*;

class Student { 
    String name; int id;
    double marks;
 
    Student(String name, int id, double marks) { 
        this.name = name;
        this.id = id; this.marks = marks;
    }
    public String toString() { return name + " - " + marks; }
}

public class EXPERIMENT6 {
    public static void main(String[] args) { 
    List<Student> students = Arrays.asList(
    new Student("Himanshu", 201, 89.3),
    new Student("Neha", 202, 95.7),
    new Student("Arjun", 203, 76.8),
    new Student("Priya", 204, 82.1),
    new Student("Vikram", 205, 67.5)
    );


        System.out.println("Students scoring above 75%:"); List<String> topStudents = students.stream()
        .filter(s -> s.marks > 75)
        .sorted((s1, s2) -> Double.compare(s2.marks, s1.marks))
        .map(s -> s.name)
        .collect(Collectors.toList());

        topStudents.forEach(System.out::println);
    }
}
