import { useState, useEffect } from 'react';
import { Select, rem } from '@mantine/core';
import classes from './LanguageSelect.module.css';
import { IconLanguage } from '@tabler/icons-react';

export function LanguageSelect() {
  const icon = <IconLanguage style={{ width: rem(16), height: rem(16) }}   />;

  // Define the language state as a string type
  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'Latviešu';
  });

  // Update localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Handle language change, explicitly setting the value to a string
  const handleLanguageChange = (value: string | null) => {
    if (value) {
      setLanguage(value);
    }
  };

  return (
    <Select
      w={125}
      variant='subtle'
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
