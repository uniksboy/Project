const customer = {
    name: "John Doe",
    balance: 1000,
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: Rs. ${amount}. New balance: Rs. ${this.balance}`);
    },
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: Rs. ${amount}. New balance: Rs. ${this.balance}`);
        }
    }
};

customer.deposit(500); // Output: Deposited: Rs. 500. New balance: Rs. 1500
customer.withdraw(200); // Output: Withdrew: Rs. 200. New balance: Rs. 1300
customer.withdraw(1500); // Output: Insufficient balance!
