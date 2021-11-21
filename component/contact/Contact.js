import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

import classes from "../../styles/contact.module.scss";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = async (content) => {
    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });

      if (response.status === 400) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();
      console.log(data);

      setIsSubmitted(true);
      reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      {isSubmitted && (
        <p className={classes.success_message}>Your message was sent!</p>
      )}
      <form
        className={classes.form_container}
        onSubmit={handleSubmit(submitHandler)}
      >
        <h2 className={classes.contact_description}>
          If you are wondering about me, <br /> please feel free to ask me
          everything.
        </h2>
        <div className={classes.input_group}>
          <label htmlFor="name" className={classes.input_label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className={classes.input_field}
            {...register("name")}
          />
          <p className={classes.error_message_style}>{errors.name?.message}</p>
        </div>
        <div className={classes.input_group}>
          <label htmlFor="email" className={classes.input_label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            className={classes.input_field}
            {...register("email")}
          />
          <p className={classes.error_message_style}>{errors.email?.message}</p>
        </div>
        <div className={classes.input_group}>
          <label htmlFor="subject" className={classes.input_label}>
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className={classes.input_field}
            {...register("subject")}
          />
          <p className={classes.error_message_style}>
            {errors.subject?.message}
          </p>
        </div>
        <div className={classes.input_group}>
          <label htmlFor="message" className={classes.input_label}>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            className={`${classes.input_field} ${classes.message_style}`}
            {...register("message")}
          ></textarea>
          <p className={classes.error_message_style}>
            {errors.message?.message}
          </p>
        </div>
        <input type="Submit" className={classes.submit_style} />
      </form>
    </div>
  );
};

export default Contact;
