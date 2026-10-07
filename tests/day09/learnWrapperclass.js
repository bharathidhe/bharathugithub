//class
export class Wrappersclass {
    //variable name 
    static framework = "HybridplaywrightFW";
    browsername = "chrome";
    //method name 
    static frameworkdesign() {
        console.log("POM is used in playwright design");
    }
    clickElement() {
        console.log("element clicked successfully");
    }
    EnterText() {
        console.log("text entered successfully");
    }
    captureToken() {
        console.log("Token captured successfully");
    }
}
console.log(Wrappersclass.framework);
Wrappersclass.frameworkdesign();
//non ststic methods called using instance of class 
//how to identify non static as all methods under class 
const wrap = new Wrappersclass();
wrap.clickElement();
console.log(wrap.browsername);
