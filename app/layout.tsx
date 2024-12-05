import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import "./Layout.css"

export const metadata = {
    title: 'Busu Vēstniecība',
    description: 'Visas jūsu kravas pārvadājumu vajadzības vienā vietā',
};

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <ColorSchemeScript forceColorScheme={"dark"} />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body className="root"> {/* Optional: Add more scoped class */}
                <MantineProvider  forceColorScheme={"dark"}>{children}</MantineProvider>
            </body>
        </html>
    );
}
