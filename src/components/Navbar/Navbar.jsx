import React, { useState } from 'react';
import './Navbar.css';
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Link } from 'react-scroll';
import { Languages } from '../Languages/Languages';
import { MdOutlineLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t } = useTranslation();

    const [menuActive, setMenuActive] = useState(false);
    const [clickBtn, setClickBtn] = useState(false);

    return (
        <>
            <nav className={'container__navbar'}>
                <div className={'h1__navbar'}><h1>{t("header_nav")}</h1></div>
                <ul>
                    <li>
                        <Link to={'about'} smooth={true} duration={1000}>
                            {t("about_me_nav")}
                        </Link>
                    </li>
                    <li>
                        <Link to={'skills'} smooth={true} duration={1000}>
                            {t("skills_nav")}
                        </Link>
                    </li>
                    <li>
                        <Link to={'contacts'} smooth={true} duration={1000}>
                            {t("contacts_nav")}
                        </Link>
                    </li>
                    <li>
                        <Link to={'projectsAndWorks'} smooth={true} duration={1000}>
                            {t("projects_nav")}
                        </Link>
                    </li>
                </ul>

                <Languages active={clickBtn} setActive={setClickBtn} />
                <div className={'btn__navbar'}>
                    <button><a href='https://www.linkedin.com/in/tavakkul-zeinalov-11865b227/' target='_blank'><BsLinkedin /></a></button>
                    <button><a href='https://github.com/tevi666/' target='_blank'><BsGithub /></a></button>
                    <button><a href='https://t.me/tevi666' target='_blank'><BsTelegram /></a></button>
                    <button onClick={() => setMenuActive(!menuActive)} className={'btn__gamb'}><GiHamburgerMenu /></button>
                </div>
                <div onClick={() => { setClickBtn(!clickBtn) }} className={'langIcon__navbar'}><MdOutlineLanguage /></div>
            </nav>
            <BurgerMenu active={menuActive} setActive={setMenuActive} />
        </>
    );
};