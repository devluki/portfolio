import styles from "./ContactForm.module.scss";
import { useContext, useState } from "react";
import { LanguageContext } from "../../store/LanguageContext";
// import Translator from "../Translator/Translator";
import { useForm, SubmitHandler } from "react-hook-form";
import BtnTxt from "../BtnTxt/BtnTxt";
import FormMessage from "../FormMessage/FormMessage";

type FormFileds = {
    firstName: string;
    lastName: string;
    email: RegExp | string;
    phone: number;
    message: string;
};

const ContactForm = () => {
    const langCtx = useContext(LanguageContext);
    const [formSubmited, setFormSubmited] = useState(false);
    const [sendSuccessfully, setSendSuccessfully] = useState(false);

    const formSubmitedHandler = () => {
        setFormSubmited(false);
        setSendSuccessfully(false);
    };

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<FormFileds>();

    const submitHandler: SubmitHandler<FormFileds> = async (data) => {
        try {
            const response = await fetch(
                "https://zabiegli-development.pl/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        message: data.message,
                        phone: data.phone,
                    }),
                    // console.log("RESPONSE", res);
                    // const result = await res.json();
                },
            );
            const result = await response.json();
            // console.log(result, result.code);
            if (result.code == 200) {
                // console.log("SUCCES, check email");

                setSendSuccessfully(true);
                reset();
            } else {
                // console.log("ERROR");
                setSendSuccessfully(false);
            }
        } catch (err) {
            console.log("ERROR", err);
        }
        setFormSubmited(true);
    };

    // Extra translations for elements that can't be wrapped in Translator component

    const namePlaceHolder =
        langCtx?.currentLanguage === "en" ? "First name" : "Imię";
    const lasetNamePlaceHolder =
        langCtx?.currentLanguage === "en" ? "Last name" : "Nazwisko";
    const phonePlaceHolder =
        langCtx?.currentLanguage === "en" ? "Phone" : "Numer telefonu";
    const messagePlaceHolder =
        langCtx?.currentLanguage === "en" ? "Message" : "Wiadomość";
    const btnTranslation =
        langCtx?.currentLanguage === "en" ? "Submit" : "Wyślij";
    const btnTranslationLoading =
        langCtx?.currentLanguage === "en" ? "Loading..." : "Przesyłam...";

    // Conditional statement for disabling button when inputs are not filled
    const isFormComplete =
        isSubmitting ||
        errors.phone?.message !== undefined ||
        errors.email?.message !== undefined ||
        errors.firstName?.message !== undefined ||
        errors.lastName !== undefined ||
        errors.phone !== undefined ||
        errors.message !== undefined;

    return (
        <div className={styles.container}>
            {!formSubmited && !sendSuccessfully && (
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
                        placeholder={namePlaceHolder}
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
                        placeholder={lasetNamePlaceHolder}
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
                            // required: "Phone number is required",
                            pattern: {
                                value: /^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/,
                                message: "Please eneter a valid number",
                            },
                        })}
                        placeholder={phonePlaceHolder}
                        aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && <p role="alert">{errors.phone.message}</p>}

                    <textarea
                        className={styles.form__input}
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 100,
                                message: "Minimum length is 100",
                            },
                        })}
                        placeholder={messagePlaceHolder}
                        aria-invalid={errors.message ? "true" : "false"}
                    ></textarea>
                    {errors.message && (
                        <p role="alert">{errors.message.message}</p>
                    )}
                    <BtnTxt
                        handler1={handleSubmit(submitHandler)}
                        isDisabled={isFormComplete}
                    >
                        {!isSubmitting ? btnTranslation : btnTranslationLoading}
                    </BtnTxt>
                </form>
            )}

            <FormMessage
                formHandler={formSubmitedHandler}
                isformSubmited={formSubmited}
                isSendSuccessfully={sendSuccessfully}
            />
        </div>
    );
};

export default ContactForm;
