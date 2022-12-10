import React from 'react';
import './HelpYou.css';
import { SiProgress, SiPagespeedinsights, SiNextdotjs } from 'react-icons/si';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HelpYou = () => {
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
        <>
            <motion.div
                initial='hidden'
                whileInView='visible'
                className={'container__help__you'}>
                <motion.h1
                    custom={1} variants={animation}
                    className={'h1__help__you'}>{t("i_can_help")}</motion.h1>
                <motion.div className={'block'}>
                    <motion.div
                        custom={2} variants={animation}
                        className={'h3__help__you'}>
                        <span><SiProgress /></span>
                        <h3>{t("promoting")}</h3>
                    </motion.div>
                    <motion.div
                        custom={3} variants={animation}
                        className={'h3__help__you'}>
                        <span><SiNextdotjs /></span>
                        <h3>{t("seo")}</h3>
                    </motion.div>
                    <motion.div
                        custom={4} variants={animation}
                        className={'h3__help__you'}>
                        <span><MdOutlineLocalGroceryStore /></span>
                        <h3>{t("online_store")}</h3>
                    </motion.div>
                    <motion.div
                        custom={5} variants={animation}
                        className={'h3__help__you'}>
                        <span><SiPagespeedinsights /></span>
                        <h3>{t("one_page")}</h3>
                    </motion.div>
                    <motion.div
                        custom={6} variants={animation}
                        className={'h3__help__you'}>
                        <span><BsPeople /></span>
                        <h3>{t("mentor")}</h3>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};