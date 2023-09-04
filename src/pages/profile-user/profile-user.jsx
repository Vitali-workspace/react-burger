
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { profileInfo } from "../../services/actions/action-profile";
import styleProfileUser from "./profile-user.module.css";


function ProfileUser() {

  const dispatch = useDispatch();
  const { name, email, password } = useSelector(state => state.pages.user);
  const [inputsValue, setInputsValue] = useState({ name: name, email: email, password: password });

  function handleChangeInput(evt) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(profileInfo(inputsValue))
  }

  const [inFocus, setFocus] = useState({ name: false, email: false, password: false });

  function focus(evt) {
    setFocus({ ...focus, [evt.target.name]: true })
  }

  function blur(evt) {
    setFocus({ ...focus, [evt.target.name]: false })
  }

  const checkInput = useMemo(() => {
    return name !== inputsValue.name || email !== inputsValue.email || password !== inputsValue.password;
  }, [inputsValue, name, password, email]);

  function сancelForm(evt) {
    evt.preventDefault();
    setInputsValue({ name, email, password })
  }

  return (
    <section>
      <form className={styleProfileUser.inputs} onSubmit={submitForm}>
        <Input
          type="text"
          name="name"
          placeholder="Имя"
          value={inputsValue.name || ""}
          onChange={handleChangeInput}
          onBlur={blur}
          onFocus={focus}
          icon={inFocus.name ? "EditIcon" : ""}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={inputsValue.email || ""}
          onChange={handleChangeInput}
          onBlur={blur}
          onFocus={focus}
          icon={inFocus.email ? "EditIcon" : ""}
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={inputsValue.password || ''}
          onChange={handleChangeInput}
          onBlur={blur}
          onFocus={focus}
          icon={inFocus.password ? "EditIcon" : ""}
          minLength={6}
          required
        />

        {checkInput &&
          (<div className={styleProfileUser.button}>
            <Button htmlType="button" type="secondary" size="large" onClick={сancelForm}>Отмена</Button>
            <Button htmlType="submit" type="primary" size="medium">Сохранить профиль</Button>
          </div>)
        }

      </form>
    </section>
  );
}

export default ProfileUser;
