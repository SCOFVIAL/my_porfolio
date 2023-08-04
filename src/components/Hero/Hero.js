import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Span } from '../Header/HeaderStyles';
import Link from 'next/dist/client/link';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center >
      Hey<br />
      I'm Victor
    </SectionTitle>
    <SectionText>
I am an aspiring individual with an unwavering enthusiasm for technology and a deep passion for software development. Currently studying Computer Science at Babcock University, I am fully immersed in the dynamic world of coding and constantly seeking opportunities to enhance my skills and knowledge.
    </SectionText>
    <Button>
      <Link href="#about">About</Link>
    </Button>
    
  </LeftSection>

 </Section>
);

export default Hero;