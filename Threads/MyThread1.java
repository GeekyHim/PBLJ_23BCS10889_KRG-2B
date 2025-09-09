package Threads;

class MyThread extends Thread{
    public void run(){
        System.out.println("User Defined Thread by extending Thread Class..");
        Thread td = Thread.currentThread();
        System.out.println("Thread Info: "+td);
    } 
} 

class AlsoMyThread implements Runnable{
    public void run(){
        System.out.println("User Defined Thread by implementing runnable interface..");
        Thread th = Thread.currentThread();
        System.out.println(th);
    }
}

public class MyThread1{
    public static void main(String[] args) {
        
        MyThread obj = new MyThread();
        obj.start();
        // following is not neccesary coz it is extended by Thread class itself
        // Thread t = new Thread(obj);
        // t.start(); // run method ko directly call nhi karna
    
        System.out.println("");

        // here we need to make Thread obj TObj and pass the customThreadClass obj in Thread obj TObj coz we need to call start()

        // start method is in Thread class and not in runnable interface hence we need to 
        // make an instance of Thread and pass my CUSTOM THREAD obj in that Thread instance

        AlsoMyThread threadByRunnableInterface = new AlsoMyThread();
        //threadByRunnableInterface.start(); // error
        Thread th = new Thread(threadByRunnableInterface);
        th.start(); 

    
    }
}