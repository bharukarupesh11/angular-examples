class MyClass
{
	private value: string;
	
    constructor(value: string);
	constructor(first: string, second?: string);
    constructor(first: string, second?: string)
    {
		console.log('First:', first);
		console.log('Second:', second);
		
        if(!second)
        {
            this.value = first;
        }else 
        {
            this.value = first + second;
        }
    }
	
}

let obj1 = new MyClass("amit", "agrawal");


// to run above program follow below commands,
// 1) tsc MyClass.ts : To compile/transpile the ts code to js code
// 2) node MyClass.js : To actually run the converted js code. 
