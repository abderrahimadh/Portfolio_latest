import { Container, Wrapper, Title, ToggleButtonGroup, ToggleButton, Divider, CardContainer } from './ProjectsStyledComponent';
import { Fragment, useState } from 'react';
import { projects } from '../../data/index';
import ProjectCard from "../Cards/ProjectCard";


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');

    return (
        <Container id="Projects">
            <Wrapper>
                <Title>My PROJECTS</Title>

                <ToggleButtonGroup>
                    {[
                        { value: 'all', label: 'All' },
                        { value: 'CI/CD DevOps', label: 'CI/CD DevOps' },
                        { value: 'Security / Pentest', label: 'Security / Pentest' },
                        { value: 'Full Stack', label: 'Full Stack' },
                    ].map((filter) => (
                        <Fragment key={filter.value}>
                            <ToggleButton
                                active={toggle === filter.value}
                                value={filter.value}
                                role="button"
                                tabIndex={0}
                                aria-pressed={toggle === filter.value}
                                onClick={() => setToggle(filter.value)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setToggle(filter.value);
                                    }
                                }}
                            >
                                {filter.label}
                            </ToggleButton>
                            {filter.value !== 'Full Stack' && <Divider />}
                        </Fragment>
                    ))}
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
