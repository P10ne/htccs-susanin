import $ from 'jquery';
import validate from 'jquery-validation';

export default function authValidate() {
    $('.login-form-inputs_auth-form').validate(
        {
            rules: {
                login: 'required',
                password: 'required'
            },
            messages: {
                login: {
                    required: "Поле 'Логин' обязательно для заполнения"
                },
                password: {
                    required: "Поле 'Пароль' обязательно для заполнения"
                }
            },
            errorLabelContainer: '.login-form-message__text',
            wrapper: 'li',
            submitHandler: () => {
                alert('Submitted!');
            }
        }
    );
}
