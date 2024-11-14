"use client"
import { useState, useEffect } from 'react';
import { Select, rem } from '@mantine/core';
import classes from './LanguageSelect.module.css';
import { IconLanguage } from '@tabler/icons-react';

export function LanguageSelect() {
  const icon = <IconLanguage style={{ width: rem(16), height: rem(16) }} />;

  // Define the language state as a string type
  const [language, setLanguage] = useState<string>('Latviešu');
  
  // This state will track if the component is mounted
  const [mounted, setMounted] = useState(false);

  // Effect to set up localStorage access once mounted
  useEffect(() => {
    setMounted(true); // Mark the component as mounted
  }, []);

  // Only access localStorage on the client side after mounting
  useEffect(() => {
    if (mounted) {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, [mounted]);

  // Update localStorage whenever language changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  // Handle language change, explicitly setting the value to a string
  const handleLanguageChange = (value: string | null) => {
    if (value) {
      setLanguage(value);
    }
  };

  return (
    <Select
      w={125}
      variant="subtle"
      placeholder="Izvēlaties valodu"
      leftSection={icon}
      data={['Latviešu', 'English', 'Ruski']}
      value={language}
      onChange={handleLanguageChange}
      classNames={classes}
      checkIconPosition="right"
      allowDeselect={false}
      comboboxProps={{
        position: 'bottom',
        middlewares: { flip: false, shift: false },
        offset: 0,
      }}
    />
  );
}
