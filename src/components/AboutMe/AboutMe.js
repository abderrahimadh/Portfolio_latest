import { AboutMeContainer, AboutMeBg, AboutMeLeftContainer, Img, AboutMeRightContainer, AboutMeInnerContainer, Title, Description, LineBreak, CVButton } from './AboutMeStyledComponent';
import { personal_info } from '../../data/index';
import BgAnimation from '../BgAnimation/BgAnimation';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Box } from '@mui/material';

const AboutMe = () => {
    return (
        <div id="AboutMe">
            <AboutMeContainer>
                <AboutMeBg>
                    <BgAnimation />
                </AboutMeBg>

                <AboutMeInnerContainer>
                    <AboutMeLeftContainer id="Left">
                        <Title>ABOUT ME</Title>
                        <Description>
                            I'm Abderrahim ADHAOUR, a second-year student at Mohammedia School of Engineering,
                            diving deep into the realms of Computer Science and Digitalization. Fueled by a
                            passion for DevOps and Cloud Engineering, I'm constantly honoriing my skills through
                            competitive programming challenges and hands-on experiences.
                            My academic journey is driven by a keen interest in DevOps and cloud technologies. With a solid foundation from the Mohammedia School of Engineering, I'm committed to expanding my expertise to tackle complex challenges in these fields. Beyond the classroom, I thrive on practical applications, seeking PFE Internship opportunities to further refine my skills and make meaningful contributions to innovative teams.</Description>
                        <LineBreak />
                        <CVButton onClick={() => window.open("./img/resume.pdf", '_blank')}>View CV</CVButton>

                        {/* Social Links */}
                        <Box sx={{ marginTop: 3, display: 'flex', gap: 2 }}>
                            <IconButton href="https://www.linkedin.com/in/abderrahim-adhaour-079b39278/" target="_blank"
                                        rel="noopener noreferrer">
                                <LinkedInIcon fontSize="large" sx={{ color: '#1DA1F2' }} />
                            </IconButton>
                            <IconButton href="https://www.instagram.com/adhabderrahim/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon fontSize="large" sx={{ color: '#1DA1F2' }} />
                            </IconButton>
                            <IconButton href="https://www.facebook.com/abderrahim.adhaour" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon fontSize="large" sx={{ color: '#1DA1F2' }} />
                            </IconButton>
                        </Box>
                    </AboutMeLeftContainer>

                    <AboutMeRightContainer id="Right">
                        <Img src="./img/ashi.png" alt="AboutMe" />
                    </AboutMeRightContainer>
                </AboutMeInnerContainer>
            </AboutMeContainer>
        </div>
    );
}

export default AboutMe;
