//Encapsulation, Polymorphism, Abstraction, and Getters/Setters
//Task 1: Encapsulation Using Getters and Setters

//Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



//Task 2: Polymorphism with Method Overriding

//Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

class BankAccount{
    #balance;
    get balance(){
        return this.#balance
    }

    set balance(amount){
        if(amount > 0){
            this.#balance = amount
        }else{
            console.log(`Balance cannot be nigative`)
        }
    }
    deposite(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Deposited ${amount}. New Balance: ${this.#balance}`)
        }else{
            throw new Error(`Amount should be positve`)
        }
    }
    withdraw(amount){
        if(amount > 0){
            if(this.#balance > amount){
                this.#balance -= amount
                console.log(`Withdraw amount is ${amount}. New Balance: ${this.#balance}`)
            }
        }
    }
}

const myacc = new BankAccount()
console.log(myacc.deposite(100))