export default function login_validate(values){
    const errors = {}; //indicates no error

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }


      //validation for password
        if(!values.password){
            errors.password = 'Required';
        }else if(values.password.length <8 || values.password.length>20){
            errors.password = "Must be greater than 8 and less than 20 characters long";
        }
        else if(values.password.includes(" ")){
            errors.password = "Invalid password";
        }

        return errors;
}


export function registerValidate(values){
    const errors = {};

        if(!values.username){
            errors.username = 'Required';
        }
        else if(values.username.includes(" ")){
            errors.username = "Invalid Username";
        }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password){
        errors.password = 'Required';
    }else if(values.password.length <8 || values.password.length>20){
        errors.password = "Must be greater than 8 and less than 20 characters long";
    }
    else if(values.password.includes(" ")){
        errors.password = "Invalid password";
    }

      //validate confirm password
    if(!values.cpassword){
        errors.cpassword = 'Required';
    }else if(values.password !== values.cpassword){
        errors.cpassword = "Password Not Match...!";
    }
    else if(values.cpassword.includes(" ")){
        errors.cpassword = "Invalid confirm password";
    }

    return errors;
}