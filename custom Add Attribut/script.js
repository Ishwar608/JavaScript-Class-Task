let d=document.querySelectorAll('input');


document.getElementById('btn').addEventListener('click',()=>{
    clearErrors();
    let id = 0;
    for (const i of d) {
        if(i.hasAttribute('myData')){
            let atr = i.getAttribute('myData');
            switch(atr){
                case 'string':
                    if(Number.isInteger(parseInt(i.value))){
                        seterror(id,'Please Enter only String')
                    }
                    id+=1;
                break;    
                case 'number':
                    if(!Number.isInteger(parseInt(i.value))){
                        seterror(id,'Please Enter only Number')
                    }
                    id+=1;
                break;   
                case 'email':
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(i.value))
                    {
                      return (true)
                    }else{
                        seterror(id,'"You have entered an invalid email address!"')
                    }
                    id+=1;
                  }
                break; 
            }

        }
        
    }

})

clearErrors = () => {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
seterror = (i, error) => {

    document.getElementsByClassName('formerror')[i].innerHTML = error;

}