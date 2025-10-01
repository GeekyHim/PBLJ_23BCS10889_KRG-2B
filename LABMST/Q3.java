import java.util.Scanner;
import java.util.ArrayList;
public class Q3{
    public static double calcAvg(ArrayList<Integer> list) throws ArithmeticException{
        if(list.isEmpty()) throw new ArithmeticException("ERROR : Cannot calc avg sincee List is Empty");
        int sum = 0;
        for(int x : list){
            sum+= x;
        }
        double ans = sum/list.size();
        return ans;
    }
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter total nums u want: ");
        int n = scn.nextInt();
        ArrayList <Integer> list = new ArrayList<>();
        while(n-->0){
            System.out.print("Enter num: ");
            int ele = scn.nextInt();
            list.add(ele);
        }

        try{
            double ans = calcAvg(list);
        }catch(ArithmeticException e){
            System.out.println(e.getMessage());
        }
    }
}