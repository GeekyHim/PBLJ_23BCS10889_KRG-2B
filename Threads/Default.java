package Threads;

public class Default {
    public static void main(String[] args) {
        Thread th = Thread.currentThread();
        System.out.println(th);
        /*
         * setName(String)
         * setPriority(int 1-10)
         * sleep(ms) (checkedException ->) InterruptedException 
         */
    }
}

