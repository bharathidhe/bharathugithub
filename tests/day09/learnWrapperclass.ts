//class

export class Wrappersclass{
//variable name 
    static framework:string= "HybridplaywrightFW"
    public browsername:string="chrome"
//method name 
    static frameworkdesign(){
    console.log("POM is used in playwright design");
    }
    public clickElement(){
       console.log("element clicked successfully");
     
    }
    protected EnterText(){
        console.log("text entered successfully");
    }
    private captureToken(){
        console.log("Token captured successfully")
    }
        
}
    console.log(Wrappersclass.framework);
   
Wrappersclass.frameworkdesign()

//non ststic methods called using instance of class 
//how to identify non static as all methods under class 

const wrap= new Wrappersclass()
wrap.clickElement()
console.log(wrap.browsername)
