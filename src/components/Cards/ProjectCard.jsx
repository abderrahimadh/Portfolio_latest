import { Button, Card, CategoryBadge, Image, Skill, Skills, Details, Title, Date, Description, Members, Member } from './ProjectCardStyledComponent';

const ProjectCard = ({ project, setOpenModal }) => {
    const openDetails = () => {
        setOpenModal({ state: true, project: project });
    };

    return (
        <Card
            onClick={openDetails}
            role="button"
            tabIndex={0}
            aria-label={`View details of ${project.title}`}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openDetails();
                }
            }}
        >
            <CategoryBadge>{project.category}</CategoryBadge>
            <Image src={project.img} alt={`${project.title} preview`} loading="lazy" />

            <Skills>
                {project.skills?.slice(0, 4).map((skill, index) => (
                    <Skill key={index}>{skill}</Skill>
                ))}
            </Skills>

            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>

            <Members>
                {project.members?.map((member, index) => (
                    <Member key={index} src={member.img} alt={member.name} />
                ))}
            </Members>

            <Button onClick={openDetails}>View Details</Button>
        </Card>
    );
}

export default ProjectCard;