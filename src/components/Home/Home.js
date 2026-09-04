import { HomeContainer, Title, HomeInnerContainer, HomeLeftContainer, HomeRightContainer, Img, TextLoop, Span, HomeBg, Tagline, CtaGroup, CtaButton, CtaButtonOutline } from './HomeStyledComponent';
import Typewriter from 'typewriter-effect';
import { personal_info } from '../../data/index';
import BgAnimation from '../BgAnimation/BgAnimation';
import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
    return (
        <div id="Home">
            <HomeContainer>
                <HomeBg>
                    <BgAnimation />
                </HomeBg>

                <HomeInnerContainer>
                    <HomeLeftContainer id="Left">
                        <Title>Hello, I am
                            <br />
                            {personal_info.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: personal_info.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <Tagline>{personal_info.tagline}</Tagline>

                        <CtaGroup>
                            <CtaButton href="#Projects">View Projects</CtaButton>
                            <CtaButtonOutline href={personal_info.cv} target="_blank" rel="noopener noreferrer">Download CV</CtaButtonOutline>
                            <CtaButtonOutline href="#ContactMe">Contact Me</CtaButtonOutline>
                        </CtaGroup>

                        <Box sx={{ marginTop: 3, display: 'flex', gap: 2 }}>
                            <IconButton
                                href="https://www.linkedin.com/in/abderrahim-adhaour-079b39278/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                            >
                                <LinkedInIcon fontSize="large" sx={{ color: '#0A66C2' }} />
                            </IconButton>

                            <IconButton
                                href="https://www.instagram.com/adhabderrahim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram profile"
                            >
                                <InstagramIcon fontSize="large" sx={{ color: '#E1306C' }} />
                            </IconButton>

                            <IconButton
                                href="https://www.github.com/abderrahimadh"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile"
                            >
                                <GitHubIcon fontSize="large" sx={{ color: '#000000' }} />
                            </IconButton>

                        </Box>
                    </HomeLeftContainer>

                    <HomeRightContainer id="Right">
                        <Img src="./img/logoh.jpeg" alt="Portrait of Abderrahim ADHAOUR" />
                    </HomeRightContainer>

                </HomeInnerContainer>
            </HomeContainer>
        </div>
    );
}

export default Home;
