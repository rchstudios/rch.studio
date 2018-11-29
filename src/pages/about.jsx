







import React from 'react';
import Helmet from 'react-helmet';
import { Header, Container, Layout } from 'components';
import config from '../../config/website';
import styled, { css } from 'react-emotion';



import { FaInstagram, FaBehance, FaDribbble, FaGit, FaGithub, FaTwitter } from 'react-icons/fa';


const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    font-size: 2rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`;



const Contacts = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  
`;


const About = () => (
  <Layout>
    
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
    <h2 >Hi! I'm Maysam form LA , graduated from Columbia University, love architecture, technology and puppies.</h2>
   

    </Header>
   

     
    <SocialMedia>
    
      <a href="https://www.instagram.com/maysssam" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.behance.net/zimarc" target="_blank" rel="noopener noreferrer">
        <FaBehance />
      </a>
      <a href="https://dribbble.com/zimarc" target="_blank" rel="noopener noreferrer">
        <FaDribbble />
      </a>
      
      <a href="https://github.com/zimarc" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>

      <a href="https://twitter.com/zimarcdotcom" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </SocialMedia>
 

  </Layout>
);

export default About;
