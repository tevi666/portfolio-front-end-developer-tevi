import React from 'react';
import './Contacts.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
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
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            id='contacts'
            className={'container__contacts'}>
            <motion.h1
                custom={1} variants={animation}
                className={'h1__contacts'}>{t('contacts')}</motion.h1>
            <div className={'cont__1'}>
                <motion.a
                custom={2} variants={animation}
                    className={'a__contact'} href='tel:+994709115041'>+994-70-911-50-41</motion.a>
                <motion.a
                custom={3} variants={animation}

                    className={'a__contact'} href='mailto:tevizeynalov@gmail.com'>tevizeynalov@gmail.com</motion.a>
            </div>

        </motion.div>
    );
};