import React, { useEffect, useState } from 'react';
import './SendForm.css';
import { AiOutlineSend } from 'react-icons/ai';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ClockLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';

export const SendForm = () => {
    const { t } = useTranslation();
    const animation = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    };
    const animationSuccess = {
        hidden: {
            y: -100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 1 }
        })
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [telegram, setTelegram] = useState('');
    const [msg, setMsg] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [telegramDirty, setTelegramDirty] = useState(false);
    const [msgDirty, setMsgDirty] = useState(false);
    const nameErr = t("name_err");
    const emailErr = t("email_err");
    const phoneErr = t("tel_err");
    const tgErr = t("tg_err");
    const msgErr = t("msg_err");
    const [nameError, setNameError] = useState(nameErr);
    const [emailError, setEmailError] = useState(emailErr);
    const [phoneError, setPhoneError] = useState(phoneErr);
    const [telegramError, setTelegramError] = useState(tgErr);
    const [msgError, setMsgError] = useState(msgErr);
    const [formValid, setFormValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const blurHandler = e => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
            case 'telegram':
                setTelegramDirty(true);
                break;
            case 'msg':
                setMsgDirty(true);
                break;
        }
    };
    const emailHandler = (e) => {
        setEmail(e.target.value);
        const emailValid = t("email_valid");
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(emailValid);
        } else {
            setEmailError('');
        }
    };
    const phoneHandler = (e) => {
        setPhone(e.target.value);
        const phoneValid = t("phone_valid");
        const re =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError(phoneValid);
        } else {
            setPhoneError('');
        }
    };
    const nameHandler = (e) => {
        setName(e.target.value);
        const nameValid = t("name_valid");
        if (e.target.value.length !== 0) {
            setNameError('');
        } else {
            setNameError(nameValid);
        }
    };
    const telegramHandler = (e) => {
        setTelegram(e.target.value);
        const tgValid = t("telegram_valid");
        if (e.target.value.length > 5 && e.target.value.length < 32) {
            setTelegramError('');
        } else {
            setTelegramError(tgValid);
        }
    };
    const msgHandler = (e) => {
        setMsg(e.target.value);
        const msgValid = t("message_valid");
        if (e.target.value.length > 10) {
            setMsgError('');
        } else {
            setMsgError(msgValid);
        }
    };
    useEffect(() => {
        if (nameError || emailError || phoneError || telegramError || msgError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError, phoneError, telegramError, msgError]);
    const TOKEN = '5606394415:AAGHlr2pFtquDEOtfiTMAG3UZpMNuMHTFR8';
    const CHAT_ID = '-1001762389990';
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage `;
    const sendForm = (e) => {
        e.preventDefault();
        let message = `<b>Заявка с сайта!</b>\n`;
        message += `<b>Отправитель:</b> ${name}\n`;
        message += `<b>Почта:</b> ${email}\n`;
        message += `<b>Телефонный номер:</b> ${phone}\n`;
        message += `<b>Телеграм аккаунт:</b> @${telegram}\n`;
        message += `<b>Сообщение:</b> ${msg}\n`;
        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        }).then(res => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setName('');
                setEmail('');
                setPhone('');
                setTelegram('');
                setMsg('');
                setFormValid(false);
            }, 5000);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            console.log('Great!');
        });
    };
    return (
        <>
            <motion.div className={'container__form'}
                initial='hidden'
                whileInView='visible'
            >
                <div
                    className={'text__form'}>
                    <motion.p
                        custom={1} variants={animation}
                        className={'h1__form'}>{t("header_sendForm")}</motion.p>
                    <motion.p
                        custom={2} variants={animation}
                        className={'p__form'}>{t("p_sendForm")}</motion.p>
                </div>
                <motion.form
                    custom={3} variants={animation}
                    id='form'
                    onSubmit={sendForm}
                >
                    {(nameDirty && nameError) && <div className={'name__error'}>{nameError}</div>}
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name='name' placeholder={t("placehold_name")} />
                    {(emailDirty && emailError) && <div className={'email__error'}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name='email' placeholder={t("placehold_email")} />
                    {(phoneDirty && phoneError) && <div className={'phone__error'}>{phoneError}</div>}
                    <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} type="tel" name='phone' placeholder={t("placehold_tel")} />
                    {(telegramDirty && telegramError) && <div className={'telegram__error'}>{telegramError}</div>}
                    <input onChange={e => telegramHandler(e)} value={telegram} onBlur={e => blurHandler(e)} type="text" name='telegram' placeholder={t("placehold_tg")} />
                    {(msgDirty && msgError) && <div className={'msg__error'}>{msgError}</div>}
                    <textarea onChange={e => msgHandler(e)} value={msg} onBlur={e => blurHandler(e)} name='msg' placeholder={t("placehold_msg")} />
                    <div className={'btn__form'}><button disabled={!formValid} type="submit">{t("form_btn")} <span className={'form__btn__icon'}><AiOutlineSend /></span></button></div>
                </motion.form>
            </motion.div>
            <div className="modal__flex"
            >
                <div className="success__modal">
                    {loading ?
                        <div className={'clock__loader'}
                        >
                            <ClockLoader color={'green'} loading={loading} size={100} />
                        </div>
                        : ''
                    }
                    {loading == true ?
                        <motion.div className={'success'}
                            initial='hidden'
                            whileInView='visible'
                            custom={1} variants={animationSuccess}>
                            {t("success_message")} {name}{','} {t("success_message_next")}
                        </motion.div>
                        :
                        ''}
                </div>
            </div>
        </>
    );
};