import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "bg-gradient-to-br from-primary-500 via-secondary-500 to-tertiary-500 hover:bg-slate-200 text-slate-200 boder-slate-200 hover:border-slate-600 hover:text-slate-600" : "bg-[#121212] hover:bg-slate-800 text-slate-200 boder-slate-600 hover:border-slate-200 hover:text-slate-600"
    return (
        <button className={`${buttonStyles} rounded-full border-2 xl:px-6 sm:px-4 xl:py-3 sm:py-2 lg:text-xl sm:text-sm cursor-pointer`} onClick={() => onClick(name)}>
            {name}
        </button>
    );
}

export default ProjectTag;
