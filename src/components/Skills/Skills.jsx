import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
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
            id='skills'
            className={'h1__skills'}>
            <motion.h1
                custom={1} variants={animation}
                className={'h1__skills'}>{t("skills")}</motion.h1>
            <div
                className={'supreme__container'}>
                <motion.div
                custom={2} variants={animation}
                    draggable className={'container__skills'}>
                    {t("html")}
                </motion.div>
                <motion.div
                custom={3} variants={animation}
                    draggable className={'container__skills'}>
                    {t("css")}
                </motion.div>
                <motion.div
                custom={4} variants={animation}
                    draggable className={'container__skills'}>
                    {t("scss")}
                </motion.div>
                <motion.div
                custom={5} variants={animation}
                    draggable className={'container__skills'}>
                    {t("sass")}
                </motion.div>
                <motion.div
                custom={6} variants={animation}
                    draggable className={'container__skills'}>
                    {t("less")}
                </motion.div>
                <motion.div
                custom={7} variants={animation}
                    draggable className={'container__skills'}>
                    {t("js")}
                </motion.div>
                <motion.div
                custom={8} variants={animation}
                    draggable className={'container__skills'}>
                    {t("react")}
                </motion.div>
                <motion.div
                custom={9} variants={animation}
                    draggable className={'container__skills'}>
                    {t("redux")}
                </motion.div>
                <motion.div
                custom={10} variants={animation}
                    draggable className={'container__skills'}>
                    {t("next")}
                </motion.div>
                <motion.div
                custom={11} variants={animation}
                    draggable className={'container__skills'}>
                    {t("ts")}
                </motion.div>
                <motion.div
                custom={12} variants={animation}
                    draggable className={'container__skills'}>
                    {t("github")}
                </motion.div>
                <motion.div
                custom={13} variants={animation}
                    draggable className={'container__skills'}>
                    {t("figma")}
                </motion.div>
                <motion.div
                custom={14} variants={animation}
                    draggable className={'container__skills'}>
                    {t("tailwind")}
                </motion.div>
            </div>
        </motion.div>
    );
};