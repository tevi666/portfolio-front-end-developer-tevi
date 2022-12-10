import React from 'react';
import './AboutMe.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
export const AboutMe = () => {
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
            custom={1} variants={animation}
            className={'container__about'}>
            <div className={'border__el'}>
                <motion.h1 className={'h1__about'}
                    custom={2} variants={animation}
                >{t('about_me')}</motion.h1>
                <motion.h2
                    custom={3} variants={animation}
                    id='about'
                >{t('i_like_making')}</motion.h2>
                <motion.h3
                    custom={4} variants={animation}
                >{t('if_you_think')}<button className={'line'}>_</button></motion.h3>
                <motion.p
                    custom={5} variants={animation}
                    className={'location'}>{t("current_location")}</motion.p>
            </div>
        </motion.div>
    );
};