
  function validateForm() {


    if( document.getElementsByName("uname")[0].value == "" ) {

       error.innerHTML = 'Please enter minimum 3 letters'

       return false;
    }
    if( document.getElementsByName("email")[0].value == "" ) {
    
        error.innerHTML = 'Please enter correct email'
       return false;
    }
    if( document.getElementsByName("email")[0].value != "" ) {
    
        error.innerHTML = 'Please enter correct email'
       return false;
    }
    if( document.getElementsByName("message")[0].value == ""){

        error.innerHTML = 'Please enter message'

        return false;
        
    }

    return( true );
}