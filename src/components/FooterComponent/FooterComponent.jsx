import React from "react";
import {
  FooterContainer,
  FooterSection,
  SectionTitle,
  FooterText,
  FooterLink,
  EmailInput,
  SubscribeButton,
} from "./style";

function FooterComponent() {
  return (
    <FooterContainer>
      <FooterSection>
        <SectionTitle>Luxe</SectionTitle>
        <FooterText>Copyright © 2021 Luxe</FooterText>
        <FooterText>All rights reserved</FooterText>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Company</SectionTitle>
        <FooterLink href="#blog">Blog</FooterLink>
        <FooterLink href="#pricing">Pricing</FooterLink>
        <FooterLink href="#about">About Us</FooterLink>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Support</SectionTitle>
        <FooterLink href="#policy">Legal policy</FooterLink>
        <FooterLink href="#status">Status policy</FooterLink>
        <FooterLink href="#privacy">Privacy policy</FooterLink>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Get updates</SectionTitle>
        <EmailInput type="email" placeholder="Enter your email" />
        <SubscribeButton>Subscribe</SubscribeButton>
      </FooterSection>
    </FooterContainer>
  );
}

export default FooterComponent;
