import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { register } from "../../services/actions/action-register";
import { useDispatch, useSelector } from "react-redux";
import styleRegister from "./register.module.css";


function Register() {

  const dispatch = useDispatch();
  const { registerError } = useSelector(state => state.pages);

  const [inputsValue, setInputsValue] = useState({ name: "", email: "", password: "" });
  const [isStatusPassword, setStatusPassword] = useState(true);


  function showPassword() {
    setStatusPassword(!isStatusPassword);
  }

  function handleChangeInput(evt) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(register(inputsValue));
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
          type={isStatusPassword ? "password" : "text"}
          name="password"
          placeholder="Пароль"
          value={inputsValue.password}
          onChange={handleChangeInput}
          icon={isStatusPassword ? "ShowIcon" : "HideIcon"}
          onIconClick={showPassword}
          minLength={6}
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