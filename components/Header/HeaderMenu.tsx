"use client";
import { Group, Container, Text, AppShellHeader, Button, Burger, Transition, Paper, Stack } from '@mantine/core';
import { useDisclosure, useViewportSize } from '@mantine/hooks';
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
  const { height, width } = useViewportSize();

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
          <Group visibleFrom="sm">
            <LanguageSelect />
            <ActionToggle />
          </Group>
          <Burger
            opened={opened}
            onClick={toggle} // Toggle Drawer open/close
            size="sm"
            hiddenFrom="sm"
            style={{ zIndex: 11 }}
          />
        </div>
      </Container>
      <Transition
        mounted={opened}
        transition="fade-down"
        duration={400}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={height}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            style={{ ...transitionStyle, zIndex: 10 }}
          >
            <Stack h={height} gap={20} align='center'>
                <Text w={width*0.9} ta="left">Logo</Text>
                {items}
                <LanguageSelect />
                <ActionToggle />
            </Stack>
          </Paper>
        )}
      </Transition>
    </AppShellHeader>
  );
}
