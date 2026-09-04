import { Container, StyledCloseIcon, Wrapper, Title, Date, Description, Image, Label, Skills, Skill, Members, Member, MemberImage, MemberName, MemberDetails, ButtonGroup, Button, DetailList, DetailItem } from './ProjectDetailsStyledComponent';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';


const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;

    const closeHandler = () => {
        setOpenModal({ state: false, project: null });
    };

    const hasLink = (url) => url && url !== '#' && url !== '';

    return (
        <Modal open={true} onClose={closeHandler}>
            <Container
                onClick={closeHandler}
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Wrapper onClick={(event) => event.stopPropagation()}>
                    <StyledCloseIcon onClick={closeHandler} />
                    <Image src={project?.img} alt={`${project?.title} preview`} />
                    <Title>{project?.title}</Title>
                    <Date>{project?.date}</Date>
                    <Description>{project?.description}</Description>
                    <Skills>
                        {project?.skills.map((skill, index) => (
                            <Skill key={index}>{skill}</Skill>
                        ))}
                    </Skills>

                    {project?.descriptionDetails && (
                        <Label>Highlights</Label>
                    )}
                    {project?.descriptionDetails && (
                        <DetailList>
                            {project.descriptionDetails.map((detail, index) => (
                                <DetailItem key={index}>{detail}</DetailItem>
                            ))}
                        </DetailList>
                    )}

                    {project.members && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.members.map((member, index) => (
                                    <Member key={index}>
                                        <MemberImage src={member.img} alt={member.name} />
                                        <MemberName>{member.name}</MemberName>
                                        {hasLink(member.github) && (
                                            <MemberDetails href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub`}>
                                                <GitHub />
                                            </MemberDetails>
                                        )}
                                        {hasLink(member.linkedin) && (
                                            <MemberDetails href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                                                <LinkedIn />
                                            </MemberDetails>
                                        )}
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}

                    {hasLink(project?.website) && hasLink(project?.github) && (
                        <ButtonGroup>
                            <Button href={project?.website} target="_blank" rel="noopener noreferrer">Live Demo</Button>
                            <Button href={project?.github} target="_blank" rel="noopener noreferrer">View Code</Button>
                        </ButtonGroup>
                    )}
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ProjectDetails;