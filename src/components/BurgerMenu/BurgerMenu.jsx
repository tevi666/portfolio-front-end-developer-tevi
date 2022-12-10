import React, { useState } from 'react';
import './Burger.css';
import './burgerMenu.css';
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';
import { AiFillCloseSquare } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { Languages } from '../Languages/Languages';
import { MdOutlineLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';


export const BurgerMenu = ({ active, setActive }) => {
    const [clickBtn, setClickBtn] = useState(false);
    const { t } = useTranslation();
    return (
        <>
            <div className={active ? 'container__br active' : 'container__br'}>
                <div onClick={() => { setClickBtn(!clickBtn) }} className={'langIcon'}><MdOutlineLanguage /></div>
                <div className={'burgerLang'}><Languages active={clickBtn} setActive={setClickBtn} /></div>
                <button
                    onClick={() => setActive(false)} className={'close'}><AiFillCloseSquare /></button>
                <li className={'li__br__menu'}>
                    <Link
                        onClick={() => setActive(false)}
                        to={'about'} smooth={true} duration={1000}>
                        {t("burger_about")}
                    </Link>
                </li>
                <li
                    className={'li__br__menu'}>
                    <Link
                        onClick={() => setActive(false)}
                        to={'skills'} smooth={true} duration={1000}>
                        {t("burger_skills")}
                    </Link>
                </li>
                <li
                    className={'li__br__menu'}>
                    <Link
                        onClick={() => setActive(false)}
                        to={'contacts'} smooth={true} duration={1000}>
                        {t("burger_contacts")}

                    </Link>
                </li>
                <li
                    className={'li__br__menu'}>
                    <Link
                        onClick={() => setActive(false)}
                        to={'projectsAndWorks'} smooth={true} duration={1000}>
                        {t("burger_projects_works")}
                    </Link>
                </li>
                <div className={'btn__nav'}>
                    <button onClick={() => setActive(false)}><a href='https://www.linkedin.com/in/tavakkul-zeinalov-11865b227/' target='_blank'><BsLinkedin /></a></button>
                    <button onClick={() => setActive(false)}><a href='https://github.com/tevi666/' target='_blank'><BsGithub /></a></button>
                    <button onClick={() => setActive(false)}><a href='https://t.me/tevi666' target='_blank'><BsTelegram /></a></button>
                </div>
            </div>
        </>
    );
};