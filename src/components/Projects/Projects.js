import { Container, Wrapper, Title, ToggleButtonGroup, ToggleButton, Divider, CardContainer } from './ProjectsStyledComponent';
import { useState } from 'react';
import { projects } from '../../data/index';
import ProjectCard from "../Cards/ProjectCard";


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');

    return (
        <Container id="Projects">
            <Wrapper>
                <Title>My PROJECTS</Title>

                <ToggleButtonGroup>
                    <ToggleButton active={toggle === 'all'} value="all" onClick={() => setToggle('all')}>
                        All
                    </ToggleButton>
                    <Divider />

                    <ToggleButton active={toggle === 'CI/CD DevOps'} value="CI/CD DevOps" onClick={() => setToggle('CI/CD DevOps')}>
                        CI/CD DevOps
                    </ToggleButton>

                    <ToggleButton active={toggle === 'Security / Pentest'} value="Security / Pentest" onClick={() => setToggle('Security / Pentest')}>
                        Security / Pentest
                    </ToggleButton>
                    <Divider />

                    <ToggleButton active={toggle === 'Full Stack'} value="Full Stack" onClick={() => setToggle('Full Stack')}>
                        Full Stack
                    </ToggleButton>
                    <Divider />

                </ToggleButtonGroup>


                <CardContainer>
                    {toggle === 'all' && projects
                        .map((project) => (
                            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {toggle !== 'all' && projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>

            </Wrapper>
        </Container >
    );
}

export default Projects;
