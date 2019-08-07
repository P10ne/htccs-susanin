import $ from 'jquery';
import validate from 'jquery-validation';

export default function authValidate() {
    $('.login-form-inputs_auth-form').validate(
        {
            rules: {
                login: 'required',
                password: 'required'
            }
        }
    );
}
