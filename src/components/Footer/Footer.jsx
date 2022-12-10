import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={'container__footer'} id='footer'>
            <h1 className={'h1__footer'}>{t("title_footer")}</h1>
            <p className={'p__footer'}>{t("p_footer")}</p>
        </div>
    );
};