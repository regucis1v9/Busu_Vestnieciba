import { AppShell, AppShellHeader, AppShellMain } from '@mantine/core';
import { About } from '../About/About';
import { CardsCarousel } from '../CardsCarousel/CardsCarousel';
import { UserInfoIcons } from '../Contact/UserInfoIcons';
import { FeaturesCards } from '../FeaturesCards/FeaturesCards';
import { FooterSocial } from '../Footer/FooterSocial';
import { HeaderMenu } from '../Header/HeaderMenu';
import { HeroImageRight } from '../HeroImageRight/HeroImageRight';
import { Offerings } from '../Offerings/Offerings';
import Pricing from '../Pricing/Pricing';

export function Landing() {
  return (
    <AppShell>
      <HeaderMenu></HeaderMenu>
      <AppShellMain>
        <HeroImageRight></HeroImageRight>
        <Pricing></Pricing>  
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
