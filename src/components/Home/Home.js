import { HomeContainer, Title, HomeInnerContainer, HomeLeftContainer, HomeRightContainer, Img, TextLoop, Span, HomeBg, ContactMeButton, NavLink } from './HomeStyledComponent';
import Typewriter from 'typewriter-effect';
import { personal_info } from '../../data/index';
import BgAnimation from '../BgAnimation/BgAnimation';
import {Box, IconButton} from "@mui/material";
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

                        <HomeInnerContainer>
                            <ContactMeButton>
                                <NavLink href="#ContactMe">
                                    Leave a Message
                                </NavLink>
                            </ContactMeButton>
                        </HomeInnerContainer>

                        <Box sx={{ marginTop: 3, display: 'flex', gap: 2 }}>
                            <IconButton
                                href="https://www.linkedin.com/in/abderrahim-adhaour-079b39278/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon fontSize="large" sx={{ color: '#0A66C2' }} />
                            </IconButton>

                            <IconButton
                                href="https://www.instagram.com/adhabderrahim/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon fontSize="large" sx={{ color: '#E1306C' }} />
                            </IconButton>

                            <IconButton
                                href="https://www.github.com/abderrahimadh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon fontSize="large" sx={{ color: '#000000' }} />
                            </IconButton>

                        </Box>
                    </HomeLeftContainer>

                    <HomeRightContainer id="Right">
                        <Img src="./img/logoh.jpeg" alt="Home" />
                    </HomeRightContainer>

                </HomeInnerContainer>
            </HomeContainer>
        </div>
    );
}

export default Home;
