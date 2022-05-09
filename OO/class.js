class Payment{
    constructor(name="Generic",value=0){
        this.name = name;
        this.value = value;
    }
}
class FinancialCycle{
    constructor(month,year){
        this.month = month;
        this.year = year;
        this.payments = []
    }
    addPayments(...payments){
        payments.forEach(p=> this.payments.push(p));
    }
    summary(){
        let totalValue = 0;
        this.payments.forEach(p=> {
            totalValue+=p.value;
        });
        return totalValue;
    }
}

const salary = new Payment('Salary',4500);
const tax = new Payment('Tax',-500);

const account = new FinancialCycle(5,2022);
account.addPayments(salary,tax);
console.log(account.summary());