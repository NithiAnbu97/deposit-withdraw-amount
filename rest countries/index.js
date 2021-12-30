// 1) withdraw & deposit from account
class Account {
    constructor (name, accountnumber, balance){
    this.name = name;
    this.accountnumber= accountnumber;
    this.balance = balance;

}
getBalance(){
    return  `The balance is : ₹ ${this.balance} `;
}

deposit(amount){
    if(this.balance = this.balance + amount);
    return this.getBalance();
}

withdraw(amount){
    if(this.balance >= amount){
        this.balance = this.balance - amount;
        return this.getBalance();

    }else{
        return`insuficiant balance. ${this.getBalance()}`;
    }
}   
}

const Nithianbu = new Account("Nithianbu", 2509, 1_00_00_00_000);
 console.log(Nithianbu);

console.log(Nithianbu.getBalance());

console.log(Nithianbu.withdraw(5_00_000));

 console.log(Nithianbu.deposit(5_00_000));

console.log(Nithianbu.withdraw(1_00_000));

console.log(Nithianbu.deposit(5_00_000));

console.log(Nithianbu.withdraw(1_00_00_000));

console.log(Nithianbu.deposit(5_00_000));







//  2) By using rest countries to find;


const getCountries = () => {
    console.log("Getting countries...");
   //  creating the request

   const xhr = new XMLHttpRequest();
   //  reading the data
   // METHOD , URL
   xhr.open("GET", "https://restcountries.com/v3.1/all");
   xhr.send();

   xhr.responseType = "json";

   xhr.onload = () => {
       const countries = xhr.response;
       const countryNames = countries.map((country)  => country.name.common);
       console.log("Full data", countries, countryNames);
   }
}
getCountries();


    //a) Get all the countries with population of more than 1 crore using Filter function

var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all','true');
xhr.send();
xhr.onload=function (){
    const countryData=JSON.parse(this.response);
    const population=countryData.filter((element)=>{
        return element.population>1_00_00_000;
    })
    console.log(population);
}



    //b)  Print the total population of countries using reduce function 


var xhr=new XMLHttpRequest();
 xhr.open('GET','https://restcountries.com/v3.1/all','true');
 xhr.send();
 xhr.onload=function (){
    const countryData=JSON.parse(this.response);
    const eslanguage =countryData.filter((element)=>{
        return element.language;
    })
    console.log(eslanguage.spanish);
}

