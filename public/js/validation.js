document.querySelector('#btnSubmit').addEventListener('click', register);

function register(e) {
    let inputs  = document.querySelectorAll('.input');
    let email = document.querySelector('#email').value;
    let valid = validateEmail(email);
    if(!valid) {
        document.querySelector('#email').classList.add('error');
        swal({
            title: "Email field is invalid",
            text: "Make sure email is in the right format",
            icon: "error",
            button: {
              text: "OK",
              className: "button",
            },
            });
        return;
    } 
    let error = validateForm(inputs);
    if(error == true) {
        swal({
            title: "One or more items are empty",
            text: "All items are required. Be sure to fill the entire form",
            icon: "error",
            button: {
              text: "OK",
              className: "button",
            },
            });
    } else {
        swal({
            title: "Your message has been sent",
            text: "We'll get in touch with you as soon as possible!",
            icon: "success",
            button: {
              text: "OK",
              className: "button",
            },
            }).then(function() {
                document.getElementById('form').submit();
            })
    }
}




let inputs = document.querySelectorAll('.input');
inputs.forEach(input => input.onfocus = () => {
    input.classList.remove('error');
})

const validateEmail = email => {
    let valid = false;
    const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if(re.test(email)) {
        valid = true;
    }
    return valid;
}

const validateForm = inputs => {
    let error = false;
    const prueba = ''
    for(let input of inputs) {
        if(input.value == '') {
            error  = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
    return error;
}