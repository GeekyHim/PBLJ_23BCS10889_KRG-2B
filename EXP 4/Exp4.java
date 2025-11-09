package Experiment_Codes;

class TicketBooking {
    private boolean isBooked = false;

    public synchronized void bookTicket(String userType, String threadName) {
        if (!isBooked) {
            System.out.println(userType + " " + threadName + " booked the seat.");
            isBooked = true;
        } else {
            System.out.println(userType + " " + threadName + " could not book. Seat already booked.");
        }
    }
}

class Customer extends Thread {
    private TicketBooking bookingSystem;
    private String userType;

    public Customer(TicketBooking bookingSystem, String userType) {
        this.bookingSystem = bookingSystem;
        this.userType = userType;
    }

    public void run() {
        bookingSystem.bookTicket(userType, Thread.currentThread().getName());
    }
}

public class Exp4 {
    public static void main(String[] args) {
        TicketBooking booking = new TicketBooking();

        Customer normalUser = new Customer(booking, "Normal User");
        normalUser.setName("Thread 1");

        Customer vipUser = new Customer(booking, "VIP User");
        vipUser.setName("Thread 2");

        normalUser.setPriority(Thread.MIN_PRIORITY);
        vipUser.setPriority(Thread.MAX_PRIORITY);

        normalUser.start();
        vipUser.start();
    }
}
