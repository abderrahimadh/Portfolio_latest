import {
    Container,
    Wrapper,
    Title,
    CertificationsContainer,
    CertificationCard,
    CertificationName,
    CertificationMeta,
    CertificationIssuer,
    CertificationStatus,
} from './CertificationsStyledComponent';
import { certifications } from '../../data/index';

const Certifications = () => {
    return (
        <Container id="Certifications">
            <Wrapper>
                <Title>CERTIFICATIONS</Title>
                <CertificationsContainer>
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.id}>
                            <CertificationName>{cert.name}</CertificationName>
                            <CertificationMeta>
                                <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                                <CertificationStatus status={cert.status}>{cert.status}</CertificationStatus>
                            </CertificationMeta>
                        </CertificationCard>
                    ))}
                </CertificationsContainer>
            </Wrapper>
        </Container>
    );
};

export default Certifications;