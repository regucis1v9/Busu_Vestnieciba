import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconTruck, IconRosetteDiscountFilled, IconUser, IconUsersGroup, IconMessageCircle, IconStar } from '@tabler/icons-react';
import classes from './Offerings.module.css';

export const MOCKDATA = [
    {
      icon: IconTruck,
      title: 'Pārvadājumi visā Latvijā',
      description:
        'Mēs piedāvājam ātrus un drošus pārvadājumus visā Latvijā, nodrošinot laicīgu un efektīvu preču piegādi.',
    },
    {
      icon: IconRosetteDiscountFilled,
      title: 'Kvalitatīvi pakalpojumi par godīgām cenām',
      description:
        'Mūsu pakalpojumi ir augstākajā kvalitātē, piedāvājot izcilus rezultātus par pieņemamām un godīgām cenām.',
    },
    {
      icon: IconUser,
      title: 'Individuāla pieeja katram klientam',
      description:
        'Katrs klients ir unikāls, un mēs pielāgojam mūsu pakalpojumus atbilstoši individuālajām vajadzībām un vēlmēm.',
    },
    {
      icon: IconMessageCircle,
      title: 'Tieša komunikācija bez starpniekiem',
      description:
        'Mēs nodrošinām tiešu saziņu ar klientiem, tādējādi izslēdzot starpniekus un garantējot ātru un efektīvu komunikāciju.',
    },
    {
      icon: IconUsersGroup,
      title: 'Pretīmnākošs personāls',
      description:
        'Mūsu komanda ir draudzīga, atsaucīga un vienmēr gatava palīdzēt, lai nodrošinātu izcilu pieredzi katram klientam.',
    },
    {
      icon: IconStar,
      title: 'Augsta klientu apmierinātība',
      description:
        'Mēs vienmēr cenšamies pārsniegt klientu gaidas un nodrošināt, lai katrs klients būtu pilnībā apmierināts ar mūsu pakalpojumiem.',
    },
  ];
  

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" color='orange' size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function Offerings() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper} id='offerings'>
      <Title className={classes.title}>Ko Mēs Piedāvājam</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}