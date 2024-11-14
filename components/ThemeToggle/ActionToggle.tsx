"use client"
import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './ActionToggle.module.css';
import { useEffect, useState } from 'react';

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [buttonBg, setButtonBg] =  useState<string>();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  useEffect (() => {
    if(computedColorScheme === "light"){
      setButtonBg(theme.colors.orange[4])
    }else{
      setButtonBg(theme.colors.orange[5])
    }
  }, [computedColorScheme]);

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="filled"
        size="md"
        aria-label="Toggle color scheme"
        style={{backgroundColor: buttonBg}}
        ml={20}
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5}  />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}