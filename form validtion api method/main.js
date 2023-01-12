let frm = document.forms['frm'];

val = (event) =>{
    clearErrors();
    for (let i = 0; i < frm.length; i++) {
                if(!frm.elements[i].checkValidity()){
                    seterror(i, frm.elements[i].validationMessage);

                }
            }
            event.preventDefault();
}

clearErrors = () => {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

seterror = (i, error) => {

    document.getElementsByClassName('formerror')[i].innerHTML = error;

}