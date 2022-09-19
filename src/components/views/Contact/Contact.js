import clsx from "clsx";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_EMAIL}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY_EMAIL}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSuccess(true);
    reset();
  };
  return (
    <>
      <section className={clsx(styles.contactContainer)}>
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact me
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Drop me a message!
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              autoComplete="off"
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
            >
              <div className="row">
                <div className="col-md-6">
                  <fieldset className="md-form mb-0">
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required",
                        },
                        pattern: {
                          required: true,
                          message: "This field is required!",
                        },
                      })}
                      type="text"
                      id="name"
                      name="name"
                      placeholder=" "
                      className="form-control"
                      autoComplete="nope"
                    />
                    <label htmlFor="name" className="">
                      Name
                    </label>
                    {errors.email && (
                      <div className={styles.error}>{errors.name?.message}</div>
                    )}
                  </fieldset>
                </div>

                <div className="col-md-6">
                  <fieldset className="md-form mb-0">
                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder=" "
                      autoComplete="off"
                    ></input>
                    <label htmlFor="email" className="">
                      Email
                    </label>
                    {errors.email && (
                      <div className={styles.error}>
                        {errors.email?.message}
                      </div>
                    )}
                  </fieldset>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <fieldset className="md-form mb-0">
                    <input
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Subject is required",
                        },
                        maxLength: {
                          value: 30,
                          message: "max. 30 chars!",
                        },
                      })}
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder=" "
                      className="form-control"
                      autoComplete="off"
                    />
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                    {errors.subject && (
                      <div className={styles.error}>
                        {errors.subject?.message}
                      </div>
                    )}
                  </fieldset>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <fieldset className="md-form">
                    <textarea
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Message is required",
                        },
                        maxLength: {
                          value: 100,
                          message: "max. 100 chars!",
                        },
                        minLength: {
                          value: 3,
                          message: "min. 3 chars!",
                        },
                      })}
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      placeholder=" "
                      className="form-control md-textarea"
                      autoComplete="off"
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    {errors.message && (
                      <div className={styles.error}>
                        {errors.message?.message}
                      </div>
                    )}
                  </fieldset>
                </div>
              </div>
              <input type="submit" value="Send" className={styles.sendButton} />
              {success && <div className={styles.success}>Success!</div>}
            </form>

            <div className="text-center text-md-left"></div>
            <div className="status"></div>
          </div>

          <div className={clsx("col-md-3 text-center", styles.sideInfo)}>
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>szatkowskifilip@filq.pl</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.socials}>
        <h2>All my socials</h2>
        <div>
          <a href="https://www.youtube.com/c/filqTV">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/filqqq">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
