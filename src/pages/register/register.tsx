import { useState, FC, FormEvent, ChangeEvent } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import { register } from "../../services/actions/action-register";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { AppThunkAction } from "../../services/types/services-types";
import { storageName, storageEmail } from "../../utils/storage";
import styleRegister from "./register.module.css";

interface IRegister {
  name: string;
  email: string;
  password: string;
}

const Register: FC = () => {

  const dispatch = useAppDispatch();
  const { registerError } = useAppSelector((state) => state.pages);

  const [inputsValue, setInputsValue] = useState<IRegister>({ name: "", email: "", password: "" });
  const [isStatusPassword, setStatusPassword] = useState<boolean>(true);

  storageName(inputsValue.name);
  storageEmail(inputsValue.email);

  function showPassword() {
    setStatusPassword(!isStatusPassword);
  }

  function handleChangeInput(evt: ChangeEvent<HTMLInputElement>) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt: FormEvent) {
    evt.preventDefault();
    dispatch(register(inputsValue) as AppThunkAction);
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
        <Input
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