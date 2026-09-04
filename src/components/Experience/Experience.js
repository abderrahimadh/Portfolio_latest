import {
    Container, Wrapper, Title, Description, TimelineSection,
    TimelineLine, TimelineItem, TimelineDot, ExperienceCard,
    Top, CompanyLogo, Company, Role, Date, Category, List, ListItem,
    ToolsWrapper, ToolTag
} from './ExperienceStyledComponent';
import { experience } from '../../data/index';

const Experience = () => {
    return (
        <Container id="Experience">
            <Wrapper>
                <Title>EXPERIENCE</Title>
                <TimelineSection>
                    <TimelineLine />
                    {experience.map((item, index) => (
                        <TimelineItem key={item.id}>
                            <TimelineDot />
                            <ExperienceCard>
                                <Top>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        {item.logo && <CompanyLogo src={item.logo} alt={item.company} />}
                                        <div>
                                            <Company>{item.company}</Company>
                                            <Role>{item.title}</Role>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <Category>{item.category}</Category>
                                        <Date>{item.date}</Date>
                                    </div>
                                </Top>
                                <List>
                                    {item.points.map((point, i) => (
                                        <ListItem key={i}>{point}</ListItem>
                                    ))}
                                </List>
                                {item.tools && item.tools.length > 0 && (
                                    <ToolsWrapper>
                                        {item.tools.map((tool, i) => (
                                            <ToolTag key={i}>{tool}</ToolTag>
                                        ))}
                                    </ToolsWrapper>
                                )}
                            </ExperienceCard>
                        </TimelineItem>
                    ))}
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience;
