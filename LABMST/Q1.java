import java.util.Scanner;
import java.util.ArrayList;

public class Q1 {
    public static ArrayList<Integer> list;
    
    static class myException extends Exception{
        public myException(String message){
            super(message);
        }
    }

    public static void add(int num){
        list.add(num);
    }
    public static void remove(int n) throws myException{
        if(list.isEmpty()){
            throw new myException("ERROR : Cannot remove becoz List is Empty");
        }
        list.remove(0);
    }

    public static void main(String[] args) {
        list = new ArrayList<>();
        add(1);
        try{
            remove(0);
            remove(0);

        }catch(myException e){
            System.out.println(e.getMessage());
        }



    }
}
