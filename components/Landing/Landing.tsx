import { AppShell, AppShellHeader, AppShellMain } from '@mantine/core';
import { HeaderMenu } from '../Header/HeaderMenu';
import { FooterSocial } from '../Footer/FooterSocial';
import { HeroImageRight } from '../HeroImageRight/HeroImageRight';
import { FeaturesCards } from '../FeaturesCards/FeaturesCards';
import { About } from '../About/About';
import { Offerings } from '../Offerings/Offerings';
import { CardsCarousel } from '../CardsCarousel/CardsCarousel';
import { UserInfoIcons } from '../Contact/UserInfoIcons';

export function Landing() {
  return (
    <AppShell>
      <HeaderMenu></HeaderMenu>
      <AppShellMain>
        <HeroImageRight></HeroImageRight>
        <Offerings></Offerings>
        <About></About>
        <FeaturesCards></FeaturesCards>
        <CardsCarousel></CardsCarousel>
        <UserInfoIcons></UserInfoIcons>
      </AppShellMain>
      <FooterSocial></FooterSocial>
    </AppShell>
  );
}
