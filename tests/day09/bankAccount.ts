
class bankaccount{

     public accountHolder:string
      static bankName: string
      protected readonly accountNumber:number
       private balance:number


       constructor(
       accountHolder:string,
        bankName:String,
        accountNumber:Number,
        balance:number,
       ){

       this.accountHolder=accountHolder;
       this.bankName=bankName;
       this.accountNumber=accountNumber;
       this,balance=balance;

}}