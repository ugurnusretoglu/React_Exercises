import * as yup from 'yup';

export const registerPageSchema = yup.object().shape({
    username: yup.string().required("The username field cannot be left blank."),
    password: yup.string().required("The password field cannot be left blank.")
})