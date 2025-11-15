import java.util.Scanner;

// Custom Exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

// Class that uses the exception
class Est {
    void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18 or above");
        }
        System.out.println("You are over or eql to 18.");
    }
}

// Main class
public class Question3 {
    public static void main(String[] args) {
        Est est = new Est(); 
        Scanner scn = new Scanner(System.in);
        System.out.print("ENTER AGE:");
        int age = scn.nextInt();
        try {
            est.checkAge(age);
        } catch (InvalidAgeException e) {
            System.out.println("Exception: " + e.getMessage());
        }

    }
}
