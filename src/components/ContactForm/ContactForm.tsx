import styles from "./ContactForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type FormFileds = {
    firstName: string;
    lastName: string;
    email: RegExp | string;
    phone: number;
    message: string;
};

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFileds>();

    const submitHandler: SubmitHandler<FormFileds> = (data) => {
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <form
                action="POST"
                onSubmit={handleSubmit(submitHandler)}
                className={styles.form}
            >
                <input
                    className={styles.form__input}
                    {...register("firstName", {
                        required: "First name is required",
                    })}
                    placeholder="First Name"
                    aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && (
                    <p role="alert">{errors.firstName.message}</p>
                )}
                <input
                    className={styles.form__input}
                    {...register("lastName", {
                        required: "Last name is required",
                    })}
                    placeholder="Last Name"
                    aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && (
                    <p role="alert">{errors.lastName.message}</p>
                )}
                <input
                    className={styles.form__input}
                    {...register("email", {
                        required: "Email Address is required",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Please enter a valid email",
                        },
                    })}
                    placeholder="Email"
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p role="alert">{errors.email.message}</p>}
                <input
                    className={styles.form__input}
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/,
                            message: "Please eneter a valid number",
                        },
                    })}
                    placeholder="Phone"
                    aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && <p role="alert">{errors.phone.message}</p>}

                <textarea
                    className={styles.form__input}
                    {...register("message", {
                        required: "Message is required",
                    })}
                    placeholder="Message"
                    aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && <p role="alert">{errors.message.message}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
