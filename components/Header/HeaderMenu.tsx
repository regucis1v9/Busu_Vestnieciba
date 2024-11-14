"use client"
import { Group, Container, Text, AppShellHeader, Button, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';
import { ActionToggle } from '../ThemeToggle/ActionToggle';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';

interface LinkItem {
  link: string;
  label: string;
}

const links: LinkItem[] = [
  { link: '#offerings', label: 'Piedāvājumi' },
  { link: '#about', label: 'Par Mums' },
  { link: '#contact', label: 'Sazināties' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  // Function to scroll to the corresponding section
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }
  };

  const items = links.map((link) => (
    <Button
      key={link.label}
      onClick={() => handleScroll(link.link.substring(1))} // Remove '#' and scroll to the section
      className={classes.link}
      color='orange'
      variant='subtle'
    >
      {link.label}
    </Button>
  ));

  return (
    <AppShellHeader className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Text>Logo</Text>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Group>
            <ActionToggle />
            <LanguageSelect></LanguageSelect>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"  />
        </div>
      </Container>
    </AppShellHeader>
  );
}
