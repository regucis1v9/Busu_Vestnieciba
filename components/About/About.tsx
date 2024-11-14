"use client"
import { Group, Stack, Image, Title, Text, Divider } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import NextImage from 'next/image';
import classes from "./About.module.css";

export function About() {
  const { height, width } = useViewportSize();
  return (
    <Stack align="center" justify="center" p="xl" gap={100} mb={70} mt={50} pt={50} id="about">
        <Title>
            Par Mums
        </Title>
        <Group className={classes.group}>
            <Stack className={classes.stack}>
                <Divider my="xs" label="Par mūsu uzņēmummu" labelPosition="left" />
                <Text className={classes.text1} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat voluptas iste deserunt quas veniam consequuntur id modi et, excepturi commodi porro, magnam perspiciatis obcaecati facere molestiae nostrum suscipit, nisi quibusdam! Dicta vel fugit temporibus libero harum consequuntur, magnam reiciendis.</Text>    
            </Stack>
            <Image component={NextImage} src='/logo.svg' fit="contain" radius="sm" width={200} height={200} alt="Kompānijas logo" visibleFrom="sm" />
        </Group>
        <Group className={classes.group}>
            <Image component={NextImage} src='/person.jpg' fit="contain" radius="sm" width={200} height={200} alt="Īpašnieka foto" visibleFrom="sm"/>
            <Stack className={classes.stack}>
                <Divider my="xs" label="Par mūsu īpašnieku" labelPosition="right" />
                <Text className={classes.text2} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat voluptas iste deserunt quas veniam consequuntur id modi et, excepturi commodi porro, magnam perspiciatis obcaecati facere molestiae nostrum suscipit, nisi quibusdam! Dicta vel fugit temporibus libero harum consequuntur, magnam reiciendis.</Text>    
            </Stack>
        </Group>
    </Stack>
  );
}
