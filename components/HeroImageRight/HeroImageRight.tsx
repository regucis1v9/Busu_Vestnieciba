"use client"
import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('offerings');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.root}>
      <Container size="lg" mt={56}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'yellow', to: 'orange' }}
              >
                Uzticams
              </Text>{' '}
              un 
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'yellow', to: 'orange' }}
              >
                {' '}pieejams
              </Text>{' '}
              kravas pārvadāšanas uzņēmums
            </Title>

            <Text className={classes.description} mt={30}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit tempora voluptates et doloremque aperiam reiciendis dicta placeat esse sit?
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'yellow', to: 'orange' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={handleScroll} // Add onClick event
            >
              Turpināt
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
