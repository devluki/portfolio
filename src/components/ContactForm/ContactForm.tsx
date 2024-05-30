import styles from "./ContactForm.module.scss";
import { useContext, useState } from "react";
import { LanguageContext } from "../../store/LanguageContext";
import Translator from "../Translator/Translator";
import { useForm, SubmitHandler } from "react-hook-form";
import BtnTxt from "../BtnTxt/BtnTxt";

type FormFileds = {
    firstName: string;
    lastName: string;
    email: RegExp | string;
    phone: number;
    message: string;
};

const ContactForm = () => {
    const langCtx = useContext(LanguageContext);
    const [messageSend, setMessageSent] = useState(false);
    const [sendSuccessfully, setSendSuccessfully] = useState(false);

    const messageSendHandler = () => {
        setMessageSent(false);
    };

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<FormFileds>();

    const submitHandler: SubmitHandler<FormFileds> = async (data) => {
        try {
            const response = await fetch("http://localhost:3001/api/contact", {
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
            });
            const result = await response.json();
            if (result.code == 200) {
                console.log("SUCCES, check email");

                setSendSuccessfully(true);
                reset();
            } else {
                console.log("ERROR");
            }
        } catch (err) {
            console.log("ERROR", err);
            if (!err) {
                setMessageSent(true);
            }
            setSendSuccessfully(false);
            setMessageSent(true);
        }
    };

    const namePlaceHolder =
        langCtx?.currentLanguage === "en" ? "First name" : "Imię";
    const lasetNamePlaceHolder =
        langCtx?.currentLanguage === "en" ? "Last name" : "Nazwisko";
    const phonePlaceHolder =
        langCtx?.currentLanguage === "en" ? "Phone" : "Numer telefonu";
    const messagePlaceHolder =
        langCtx?.currentLanguage === "en" ? "Message" : "Wiadomość";

    const isFormComplete =
        errors.phone?.message !== undefined ||
        errors.email?.message !== undefined ||
        errors.firstName?.message !== undefined ||
        errors.lastName !== undefined ||
        errors.phone !== undefined;

    return (
        <div className={styles.container}>
            {!messageSend && (
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
                            required: "Phone number is required",
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
                                message: "min length is 100",
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
                        {!isSubmitting ? "Submit" : "Loading..."}
                    </BtnTxt>
                </form>
            )}

            {messageSend && (
                <>
                    {sendSuccessfully && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                        >
                            {/* Length 734.6997680664062 */}
                            <path
                                className={styles.pathAt}
                                id="pathAt"
                                stroke="white"
                                strokeWidth="3"
                                d="M38.5163 87.956C31.4708 87.9624 25.379 87.0021 20.2409 85.075C15.1255 83.1706 11.0093 80.3562 7.89226 76.6318C4.77523 72.9301 2.69151 68.3865 1.64112 63.0011C0.613454 57.6157 0.653271 51.468 1.76057 44.5578C2.86804 37.8296 4.83977 31.7823 7.67576 26.4161C10.5117 21.0498 14.1098 16.4783 18.47 12.7016C22.8302 8.90215 27.8616 5.9998 33.5643 3.99457C39.267 1.98934 45.5275 0.983602 52.3456 0.97735C58.8684 0.971369 64.4488 1.98898 69.0871 4.03018C73.7253 6.07138 77.4438 8.87479 80.2425 12.4404C83.0412 16.006 84.9314 20.0952 85.9129 24.7079C86.8944 29.3207 86.967 34.1956 86.1308 39.3328C85.5432 42.9242 84.7396 46.4363 83.72 49.8691C82.7004 53.2791 81.351 56.3712 79.6717 59.1455C77.9924 61.897 75.8808 64.1035 73.3369 65.765C70.7929 67.4036 67.6914 68.2588 64.0324 68.3303C62.0779 68.4003 60.2254 68.1747 58.475 67.6536C56.7472 67.1324 55.3373 66.2928 54.2454 65.1347C53.1761 63.9539 52.652 62.4544 52.6731 60.6362L52.264 60.6365C51.5379 61.9781 50.4368 63.2291 48.9606 64.3896C47.4844 65.5273 45.7011 66.438 43.6108 67.1218C41.5432 67.7827 39.2253 68.0576 36.657 67.9463C33.816 67.8353 31.3495 67.1898 29.2575 66.0099C27.1655 64.83 25.4709 63.1952 24.1735 61.1055C22.8988 59.0157 22.067 56.5392 21.678 53.6759C21.3118 50.8126 21.4111 47.6307 21.9761 44.1302C22.5412 40.7661 23.5271 37.7538 24.9337 35.0934C26.3404 32.4103 28.0541 30.1019 30.0751 28.1682C32.096 26.2118 34.2878 24.6644 36.6504 23.5258C39.0357 22.3873 41.4896 21.6691 44.0121 21.3714C46.4209 21.0964 48.5914 21.1626 50.5236 21.5699C52.4785 21.9772 54.0473 22.6008 55.2299 23.4406C56.4352 24.2804 57.1178 25.2003 57.2779 26.2001L57.721 26.1997L58.3653 22.3809L66.7516 22.3732L61.4965 54.0144C61.2482 55.8101 61.4882 57.3326 62.2166 58.582C62.9678 59.8313 64.2184 60.4551 65.9684 60.4535C68.0365 60.4516 69.7745 59.6887 71.1822 58.1646C72.6126 56.6406 73.8264 54.2986 74.8235 51.1386C75.8433 47.9786 76.76 43.9323 77.5737 38.9997C78.1614 35.5446 78.238 32.2945 77.8034 29.2495C77.3688 26.1817 76.4685 23.4098 75.1026 20.9338C73.7367 18.435 71.9051 16.289 69.608 14.4956C67.3109 12.7023 64.5824 11.3184 61.4224 10.344C58.2624 9.36966 54.6824 8.8843 50.6824 8.88797C45.2506 8.89295 40.2741 9.73842 35.7529 11.4244C31.2545 13.0876 27.3021 15.489 23.8959 18.6284C20.4897 21.7679 17.6863 25.5319 15.4858 29.9203C13.2852 34.2859 11.7443 39.1851 10.8629 44.6177C9.93628 50.2776 9.86134 55.3004 10.6381 59.6861C11.4375 64.049 13.0886 67.7293 15.5914 70.727C18.0941 73.7247 21.403 75.9944 25.5181 77.5361C29.6559 79.1005 34.5884 79.88 40.3157 79.8748C42.8612 79.8724 45.3837 79.6429 47.8833 79.186C50.4056 78.7519 52.6665 78.2498 54.666 77.6798C56.6882 77.1325 58.1991 76.6879 59.1988 76.3461L60.433 83.8109C58.8881 84.4714 56.9001 85.1209 54.4688 85.7595C52.0376 86.3981 49.4244 86.9232 46.6294 87.3349C43.857 87.7465 41.1527 87.9536 38.5163 87.956ZM40.0585 59.5909C43.013 59.5882 45.4784 58.995 47.4546 57.8114C49.4535 56.6278 51.0428 54.8649 52.2224 52.5229C53.4248 50.1582 54.3198 47.2028 54.9075 43.6568C55.4725 40.2018 55.4927 37.4518 54.9681 35.4068C54.4435 33.3391 53.3626 31.8628 51.7254 30.9779C50.1109 30.0703 47.906 29.6178 45.1105 29.6204C42.5424 29.6227 40.2588 30.2498 38.26 31.5016C36.2611 32.7535 34.6036 34.4482 33.2874 36.5858C31.9711 38.7233 31.0983 41.0991 30.6689 43.7132C30.2396 46.4636 30.2079 49.0545 30.5738 51.486C30.9396 53.8947 31.8732 55.8484 33.3746 57.347C34.876 58.8457 37.1039 59.5936 40.0585 59.5909Z"
                                // fill="white"
                            />
                        </svg>
                    )}
                    {/* Error animation */}
                    {!sendSuccessfully && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="131"
                            height="144"
                            viewBox="0 0 131 144"
                            fill="none"
                        >
                            {/* 305.45623779296875 */}
                            <path
                                d="M69.9266 14.8796L113.413 97.675C115.162 101.004 112.747 105 108.987 105H22.0135C18.2528 105 15.8382 101.004 17.5869 97.675L61.0734 14.8796C62.9468 11.3129 68.0532 11.3129 69.9266 14.8796Z"
                                stroke="white"
                                strokeWidth="6"
                                id="errorOutline"
                                className={styles.errorOutline}
                            />
                            {/* 26 */}
                            <path
                                d="M65 39V65"
                                stroke="white"
                                strokeWidth="8"
                                strokeLinecap="round"
                                id="errorLine"
                                className={styles.errorLine}
                            />
                            <ellipse
                                cx="65"
                                cy="87"
                                rx="5"
                                ry="6"
                                fill="#D9D9D9"
                            />
                        </svg>
                    )}

                    <p>
                        <Translator translationKey="contactForm.successMessage" />
                    </p>
                    <BtnTxt handler1={messageSendHandler}>
                        <Translator translationKey="contactForm.returnBtn" />
                    </BtnTxt>
                </>
            )}
        </div>
    );
};

export default ContactForm;
