import { motion } from 'framer-motion';
import React from 'react';

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
}

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-slate-200' : 'text-slate-600'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className='h-1 bg-gradient-to-br from-bg-primary-500 via-bg-secondary-500 to-bg-tertiary-500 mt-2 mr-3'
            ></motion.div>
        </button>
    );
}

export default TabButton;
