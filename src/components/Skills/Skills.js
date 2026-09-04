import { Container, Wrapper, Title, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from "./SkillsStyledComponent";
import { skills } from '../../data/index';

const hideBrokenImage = (event) => {
    // Hide the logo if the CDN link is unavailable; the skill name remains visible.
    event.currentTarget.style.display = 'none';
};

const Skills = () => {
    return (
        <Container id="Skills">
            <Wrapper>
                <Title>TECHNICAL SKILLS</Title>
                <SkillsContainer>
                    {skills.map((skill, skillIndex) => (
                        <Skill key={skillIndex}>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillList>
                                {skill.skills.map((item, itemIndex) => (
                                    <SkillItem key={`${skillIndex}-${itemIndex}`}>
                                        <SkillImage
                                            src={item.image}
                                            alt={item.name}
                                            loading="lazy"
                                            onError={hideBrokenImage}
                                        />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    );
}

export default Skills;