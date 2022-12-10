import React from 'react';
import './Languages.css';
import { useTranslation } from "react-i18next";
import american from '../../images/flag-america.jpeg';
import russian from '../../images/flag-russia.jpeg';
export const Languages = ({ active, setActive }) => {

    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <>
            <div className={active ? 'btnLangGroup clickBtn' : 'btnLangGroup'} onClick={active => setActive(!active)}>
                <button className={'langBtn'} onClick={() => changeLanguage('en')}>
                    <img className={'flagsImg'} src={american} alt="american" />
                </button>
                <button className={'langBtn'} onClick={() => changeLanguage('ru')}>
                    <img className={'flagsImg'} src={russian} alt="russia" />
                </button>
            </div>
        </>
    )
};