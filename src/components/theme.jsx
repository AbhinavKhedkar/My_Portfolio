import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'next-themes'

const theme = () => {
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted]= useState();

    useEffect(()=>{
        setMounted(true);
    },[]);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <div>
            <div className='flex justify-center'>
                {currentTheme === 'dark' ? (
                    <button
                        className='bg-black-700 hover:bg-black w-28 rounded-md border-secondary-400 border-2 p-4'
                        onClick={() => setTheme('light')}
                    >
                        on
                    </button>
                ) : (
                    <button
                        className='bg-gray-100 hover:bg-gray-300 w-28 rounded-md border-secondary-400 border-2 p-4'
                        onClick={() => setTheme('dark')}
                    >
                        on
                    </button>
                )}
            </div>
        </div>
    );
}

export default theme;
