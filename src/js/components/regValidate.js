import $ from 'jquery';
import validate from 'jquery-validation';

export default function regValidate() {
    $.validator.addMethod(
        'regex',
        function (value, element, regexp) {
            const re = new RegExp(regexp);
            const res1 = this.optional(element);
            const res2 = !re.test(value);
            return this.optional(element) || !re.test(value);
        },
        'Пароль содержит недопустимые символы'
    );

    $('.login-form-inputs_reg-form').validate(
        {
            rules: {
                fname: {
                    required: true,
                    rangelength: [2, 50]
                },
                lname: {
                    required: true,
                    rangelength: [2, 50]
                },
                email: {
                    required: true,
                    rangelength: [6, 100],
                    email: true
                },
                fpass: {
                    required: true,
                    rangelength: [6, 50],
                    // eslint-disable-next-line no-useless-escape
                    //regex: "[^\-0-9a-zA-Z,.<>/?;:'\"{}|`~!@#$%&*()_=+]" // работает, без символов [ и ]
                    regex: "[^\-0-9a-zA-Z,<>/?;:'\"{}|`~!@#$%&\\[.*\\]()_=+]"
                },
                spass: {
                    required: true,
                    equalTo: '#fpass'
                }
            },
            messages: {
                fname: {
                    required: "Поле 'Имя' обязательно к заполнению",
                    rangelength: "Поле 'Имя' должно содержать от 2 до 50 символов"
                },
                lname: {
                    required: "Поле 'Фамилия' обязательно к заполнению",
                    rangelength: "Поле 'Фамилия' должно содержать от 2 до 50 символов"
                },
                email: {
                    required: "Поле 'E-mail' обязательно для заполнения",
                    rangelength: "Поле 'E-mail' должно содержать от 6 до 100 символов",
                    email: "Данные в поле 'E-mail' некорректны"
                },
                fpass: {
                    required: "Поле 'Пароль' обязательно для заполнения",
                    rangelength: "Поле 'Пароль' должно содержать от 6 до 50 символов",
                },
                spass: {
                    required: 'Повторите пароль',
                    equalTo: 'Пароли должны совпадать'
                }
            },
            errorLabelContainer: '.login-form-message__text',
            wrapper: 'li',
            submitHandler: () => {
                alert('Submitted!');
            },

        }

    );
}
