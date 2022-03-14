import React from "react";

import useInput from "../../customHooks/useInput";

import Input from "../Input";
import Textarea from "../Textarea";

import styles from "./ContactForm.module.css";

type Props = {
  titleActionButton?: React.ReactElement;
};


function ContactForm({ titleActionButton }: Props) {
  const name = useInput('');
  const city = useInput('');
  const phone = useInput('');
  const message = useInput('');

  return (
    <form className={styles["ContactForm"]}>
      <div className={styles["ContactForm-Header"]}>
        <h3 className={styles["ContactForm-Title"]}>Залишити запит</h3>
        {titleActionButton}
      </div>
      <div className={styles["ContactForm-Content"]}>
        <Input
          type="text"
          title="Ім'я"
          placeholder="Іван Петров"
          name="name"
          isDirty={name.isDirty}
          error={name.error}
          blurHandler={name.handlerBlur}
          value={name.value}
          onChange={name.handlerChange}
          disabled={false}
        />
        <Input
          type="text"
          title="Місто"
          placeholder="Київ"
          name="city"
          isDirty={city.isDirty}
          error={city.error}
          blurHandler={city.handlerBlur}
          value={city.value}
          onChange={city.handlerChange}
          disabled={false}
        />

        <Input
          type="tel"
          title="Телефон"
          placeholder="+380 (98) 123-45-67"
          name="phone"
          isDirty={phone.isDirty}
          error={phone.error}
          blurHandler={phone.handlerBlur}
          value={phone.value}
          onChange={phone.handlerChange}
          disabled={false}
        />

        <Textarea
          title="Повідомлення"
          placeholder="Ваше повідомлення"
          name="message"
          isDirty={message.isDirty}
          error={message.error}
          blurHandler={message.handlerBlur}
          value={message.value}
          onChange={message.handlerChange}
          disabled={false}
        />
      </div>
      <div className={styles["ContactForm-Footer"]}>
        <button className={styles["ContactForm-FooterButton"]}>Залишити</button>
      </div>
    </form>
  );
}

export default ContactForm;
