
import { useState, useMemo, FC, FormEvent, ChangeEvent, FocusEvent, SyntheticEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { profileInfo } from "../../services/actions/action-profile";
import { IFocus, IForm } from "../../services/types/services-types";
import { AppThunkAction } from "../../services/types/services-types";
import styleProfileUser from "./profile-user.module.css";


const ProfileUser: FC = () => {

  const dispatch = useAppDispatch();
  const { name, email, password } = useAppSelector((state) => state.pages.user);
  const [inputsValue, setInputsValue] = useState<IForm>({ name: name, email: email, password: password });

  function handleChangeInput(evt: ChangeEvent<HTMLInputElement>) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt: FormEvent) {
    evt.preventDefault();
    dispatch(profileInfo(inputsValue) as AppThunkAction);
  }

  const [inFocus, setFocus] = useState<IFocus>({ name: false, email: false, password: false });

  function focus(evt: FocusEvent<HTMLInputElement>) {
    setFocus({ ...inFocus, [evt.target.name]: true })
  }

  function blur(evt: FocusEvent<HTMLInputElement>) {
    setFocus({ ...inFocus, [evt.target.name]: false })
  }

  const checkInput = useMemo(() => {
    return name !== inputsValue.name || email !== inputsValue.email || password !== inputsValue.password;
  }, [inputsValue, name, password, email]);

  function сancelForm(evt: SyntheticEvent) {
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
          icon={inFocus.name ? undefined : "EditIcon"}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={inputsValue.email || ""}
          onChange={handleChangeInput}
          onBlur={blur}
          onFocus={focus}
          icon={inFocus.email ? undefined : "EditIcon"}
        />
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          value={inputsValue.password || ""}
          onChange={handleChangeInput}
          onBlur={blur}
          onFocus={focus}
          icon={inFocus.password ? undefined : "EditIcon"}
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
