import { AboutMeContainer, AboutMeBg, AboutMeLeftContainer, Img, AboutMeRightContainer, AboutMeInnerContainer, Title, Description, LineBreak, CVButton } from './AboutMeStyledComponent';
import { personal_info } from '../../data/index';
import BgAnimation from '../BgAnimation/BgAnimation';


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
                            I'm Abderrahim ADHAOUR, a Computer Science and Digitalization Engineering graduate from Mohammadia School of Engineering (EMI). Specialized in DevOps and Cloud Engineering, I have hands-on experience in CI/CD automation, cloud infrastructure, containerization, and deployment.

                            Passionate about building reliable and scalable solutions, I'm continuously strengthening my expertise in technologies such as AWS, Azure, Kubernetes, Docker, Terraform, and CI/CD tools. I'm currently looking for opportunities where I can contribute to innovative projects and grow as a DevOps / Cloud Engineer.</Description>
                        <LineBreak />
                        <CVButton href={personal_info.cv} target="_blank" rel="noopener noreferrer">View CV</CVButton>
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
