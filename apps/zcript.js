const numkeys = document.querySelectorAll("#keys div");
const input = document.querySelector("#input");
let arr = [];
//oldval whole number
let oldval = 0;
let oldcal = "";
//array oldval
let oldvalu = [];

numkeys.forEach(e=>{
    e.addEventListener("click",el=>{

       let aa = el.target.textContent; 
       if (aa >= 0 || aa == ".") {
        console.log(aa , "text cont");
        if (input.dataset.id == "old") {
            oldvalu.push(aa)
            console.log("old dataset");
            oldval =  parseFloat(oldvalu.map(ell=>{
                return ell;
            }).join(''));

            input.value = oldvalu.map(ell=>{
                return ell;
            }).join('');

        }else{
            arr.push(aa)
            input.value = arr.map(ell=>{
                return ell;
            }).join('');
            console.log("new na");
        }
           
        
       }
        // key functions
        func(aa)

     

    })
})

window.addEventListener("keyup",e=>{
    if (e.key >= 0) {
    console.log(e.key);
    arr.push(e.key)
  
    input.value = arr.map(ell=>{
        return ell;
    }).join('');

    // key functions
    func(e.key)


    }
add()
})
function add() {
   const cnum = arr.map(ell=>{
        return ell;
    }).join('')

   let aaa = parseFloat(cnum) + 20;
console.log(aaa);
}
// oldvalue = 20 
//  currvaluer = 0 




function func(params) {
    console.log(arr);
    let currval = parseFloat(arr.map(ell=>{
        return ell;
    }).join(''));

    if (params == "Del") {
        if (input.dataset.id == "old") {
            oldvalu.pop();
            oldval =  parseFloat(oldvalu.map(ell=>{
                return ell;
            }).join(''));

            input.value = oldvalu.map(ell=>{
                return ell;
            }).join('');
        }else{
            arr.pop();
            input.value = arr.map(ell=>{
                return ell;
            }).join('');
        
        }
       
    }

    if (!currval) {
        if (params == "×" || params == "/") {
            currval = 1 ;
        }
        if(params == "+" || params == "-"){
            currval = 0;
            console.log("sds");
        }
       
    }
    console.log(currval);
    console.log(oldval);
    
        if (params == "×") {
            
            if (oldval == 0) {
                oldval = currval;
            }else{
                oldval *= currval;
        
            }
            oldcal = "x";
            arr = []; 
            input.dataset.id = "new";

        }
        //add
        if (params == "+") {
        
            oldval += currval;
            oldcal = "+";
            arr = [];
            input.dataset.id = "new";
    
        }
        //minus
        if (params == "-") {

        if (oldval == 0) {
            oldval = currval;
        }else{
            oldval -= currval;
           
        
    
        }
        oldcal = "-";
        arr = []; 
        input.dataset.id = "new";

        }
        //divide
        if (params == "/") {
            if (oldval == 0) {
                oldval = currval;
            }else{
                oldval /= currval;
        
            }
            oldcal = "/";
            arr = []; 
            input.dataset.id = "new";

        }
        console.log("after");
        console.log(currval);
console.log(oldval);

        if (params == "=" ) {
            if (oldcal == "+") {
                oldval += currval
            }

            if (oldcal == "-") {
                oldval -= currval
            }
            if (oldcal == "x") {
                oldval *= currval
            }
            if (oldcal == "/") {

                if (currval == 0) {
                    currval = 1
                    alert("Cannot divide by zero")

                }else{
                    oldval /= currval

                }
            }
         
            arr = [];
            oldvalu = [];
           let gg = oldval.toString();

            for (let i = 0; i < gg.length; i++) {
              oldvalu.push(gg[i]) 
            }

            console.log(oldvalu + " oldvalue");
            input.value =  oldvalu.map(ell=>{
                return ell;
            }).join('');


            input.dataset.id = "old";
    
        }
        if (params == "Reset") {
        oldvalu = [];
        oldval = 0;
        arr = [];
        oldcal = "";
        input.value ="";
            console.log("reset");
        }
    
   

}

//convert
const array = [];
let namess = "1900";
for (let i = 0; i < namess.length; i++) {
  array.push(namess[i]) 
}

let bb = array.map(ell=>{
    return ell;
}).join('');
console.log(parseFloat(bb));
