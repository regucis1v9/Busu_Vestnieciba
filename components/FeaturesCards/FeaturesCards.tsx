'use client';

import { IconCircleCheck, IconMessageCircle, IconRosetteDiscountFilled } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  rem,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Uzticamība',
    description:
      'Mēs ticam ilgtermiņa sadarbībai, kas balstīta savstarpējā uzticībā un cieņā. Ar stabilām un uzticamām attiecībām mēs kopā sasniedzam ilgtermiņa mērķus.',
    icon: IconCircleCheck,
  },
  {
    title: 'Godīgas cenas',
    description:
      'Mēs piedāvājam godīgas cenas, nodrošinot, ka saņemat vislabāko vērtību par ieguldīto. Bez slēptām izmaksām un pārsteigumiem.',
    icon: IconRosetteDiscountFilled,
  },
  {
    title: 'Tieša saziņa',
    description:
      'Strādājot ar mums, Jums vienmēr būs tieša pieeja mūsu komandai bez starpniekiem. Tas nodrošina ātru un efektīvu saziņu katrā sadarbības posmā.',
    icon: IconMessageCircle,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.orange[6]}
      />
      <Text c={"white"} fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" id="reasons">
      <Group justify="center">
        <Badge variant="filled" size="lg" color={theme.colors.orange[6]} c={"white"}>
          Labākā pārvadājumu kompānija
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm" c={"white"}>
        Kāpēc Izvēlēties Busu Vēstniecību
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Ir vēl daudz citi iemesli, lai izvēlētos sadarboties ar mums, bet šie, mūsuprāt, ir
        vissvarīgākie.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
