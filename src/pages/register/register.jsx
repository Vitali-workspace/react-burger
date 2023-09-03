import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import { register } from "../../services/actions/action-register";
import { useDispatch, useSelector } from "react-redux";
import styleRegister from "./register.module.css";


function Register() {

  const dispatch = useDispatch();
  const { isAuthorized, registerError } = useSelector(state => state.pages);

  const [inputsValue, setInputsValue] = useState({ name: "", email: "", password: "" });

  function handleChangeInput(evt) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(register(inputsValue));
  }

  if (isAuthorized) {
    return <Navigate to="/" />
  }

  return (
    <section className={styleRegister.container}>
      <h2 className={`text text_type_main-medium + ${styleRegister.title}`}>Регистрация</h2>
      <form className={styleRegister.inputs} onSubmit={submitForm}>
        <Input
          type="text"
          name="name"
          placeholder="Имя"
          value={inputsValue.name}
          onChange={handleChangeInput}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={inputsValue.email}
          onChange={handleChangeInput}
          error={registerError}
          required
        />
        <PasswordInput
          type="password"
          name="password"
          placeholder="Пароль"
          value={inputsValue.password}
          onChange={handleChangeInput}
          required
        />

        <div className={styleRegister.button}>
          <Button htmlType="submit" type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?
        <Link className={styleRegister.link} to="/login"> Войти</Link>
      </p>
    </section>
  );
}

export default Register;