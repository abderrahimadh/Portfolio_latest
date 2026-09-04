import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;

    @media (max-width: 960px) {
        padding: 0px 16px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    padding: 50px 0px;
    gap: 12px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const CertificationsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const CertificationCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: ${({ theme }) => theme.card};
    border: 0.1px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 20px 24px;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
`;

export const CertificationName = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 640px) {
        font-size: 15px;
    }
`;

export const CertificationMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`;

export const CertificationIssuer = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 640px) {
        font-size: 13px;
    }
`;

export const CertificationStatus = styled.span`
    font-size: 12px;
    font-weight: 600;
    color: ${({ status, theme }) =>
        status === "Certified" ? theme.primary : status === "In Progress" ? "#f0a020" : theme.text_secondary};
    background-color: ${({ status, theme }) =>
        status === "Certified"
            ? theme.primary + 15
            : status === "In Progress"
            ? "#f0a02022"
            : theme.text_secondary + 20};
    padding: 4px 12px;
    border-radius: 20px;
    white-space: nowrap;
`;