import React from 'react'
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'

const AppFooter = () => (
  <Footer size="mini">
    <FooterSection type="left" logo="Reskongoal">
      <FooterLinkList>
        <a href="#">Help</a>
        <a href="#">Privacy & Terms</a>
      </FooterLinkList>
    </FooterSection>
  </Footer>
)

export default AppFooter
