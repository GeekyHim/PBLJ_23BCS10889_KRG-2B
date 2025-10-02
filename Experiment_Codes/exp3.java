package Experiment_Codes;
import java.util.List; 
import java.util.Scanner;
import java.util.ArrayList;

class Notvalidinput extends Exception{ 
    public Notvalidinput(String msg) { 
        super(msg);
    }
}


public class exp3 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter num: ");
        int x = sc.nextInt();

        try {
            if (x < 0) {
                throw new Notvalidinput("square root not valid for negatives");
            }

            int low = 1, high = x, ans = 0;
            while (low <= high) {
                int mid = (low + high) / 2;

                if (mid * mid > x) {
                    high = mid - 1;
                } else if (mid * mid < x) {
                    ans = mid;
                    low = mid + 1;
                } else {
                    System.out.println(mid);
                    return;
                }
            }
            System.out.println(ans);
        } catch (Notvalidinput e) {
            System.out.println("error: " + e.getMessage());
        }
    }
}
