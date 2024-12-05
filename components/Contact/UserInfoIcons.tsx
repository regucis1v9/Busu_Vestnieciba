import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Divider, Group, Stack, Text, Title } from '@mantine/core';
import classes from './UserInfoIcons.module.css';

export function UserInfoIcons() {
  return (
    <Stack align="center" mt={100} id="contact">
      <Title>Sazinies Ar Mums</Title>
      <Group align="center" justify="center" mt={50}>
        <Group wrap="nowrap" w={300} justify="end">
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed" ta="right">
              Mājaslapas uzturētājs
            </Text>

            <Text fz="lg" fw={500} className={classes.name} ta="right">
              Regnārs Kļaviņš
            </Text>

            <Group wrap="nowrap" gap={10} mt={3} justify="end">
              <Text fz="xs" c="dimmed" ta="right">
                fake.email@gmail.com
              </Text>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            </Group>

            <Group wrap="nowrap" gap={10} mt={5} justify="end">
              <Text fz="xs" c="dimmed" ta="right">
                +371 20000000
              </Text>
              <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            </Group>
          </div>
          <Avatar src="person.jpg" size={94} radius="md" />
        </Group>
        <Group wrap="nowrap" w={300}>
          <Avatar src="/person.jpg" size={94} radius="md" />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              "Busu Vēstniecība" Īpašnieks
            </Text>

            <Text fz="lg" fw={500} className={classes.name}>
              Armands Kļaviņš
            </Text>
            <Group wrap="nowrap" gap={10} mt={5}>
              <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                +371 20000000
              </Text>
            </Group>
          </div>
        </Group>
      </Group>
    </Stack>
  );
}
