"use client";

import { MantineProvider } from '@mantine/core';
import { Landing } from '../components/Landing/Landing';
import React, { useEffect } from 'react';
import { theme } from '@/theme';

export default function HomePage() {
    useEffect(() => {
        // Ensure localStorage is set to dark mode
        localStorage.setItem('mantine-color-scheme-value', 'dark');
    }, []);

    return (
        <>
            <Landing />
        </>
    );
}
