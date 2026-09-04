import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 40px 0px;

    @media (max-width: 960px) {
        padding: 0px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
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

export const Description = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 700px;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const TimelineSection = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 10px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    position: relative;
`;

export const TimelineLine = styled.div`
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #854CE6;
    opacity: 0.4;

    @media (max-width: 768px) {
        left: 16px;
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-left: 50px;
    margin-bottom: 30px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        padding-left: 42px;
    }
`;

export const TimelineDot = styled.div`
    position: absolute;
    left: 12px;
    top: 18px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2.5px solid #854CE6;
    background: ${({ theme }) => theme.bg || '#fff'};
    z-index: 2;

    @media (max-width: 768px) {
        left: 8px;
        width: 16px;
        height: 16px;
    }
`;

export const ExperienceCard = styled.div`
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 16px 18px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid #854CE6;
    background-color: ${({ theme }) => theme.card};

    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
        border: 0.1px solid ${({ theme }) => theme.primary};
    }
`;

export const Top = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 8px 12px;
`;

export const CompanyLogo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: contain;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.text_secondary + 30};
    flex-shrink: 0;

    @media only screen and (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

export const Company = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};

    @media only screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Role = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};

    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const Date = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    white-space: nowrap;

    @media only screen and (max-width: 768px) {
        font-size: 11px;
    }
`;

export const Category = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 3px 10px;
    border-radius: 20px;
    white-space: nowrap;
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 18px;
    margin: 0;
`;

export const ListItem = styled.li`
    font-size: 15px;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 95};

    @media only screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const ToolsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
    padding-top: 10px;
    border-top: 1px solid ${({ theme }) => theme.text_secondary + 22};
`;

export const ToolTag = styled.span`
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 12};
    padding: 3px 9px;
    border-radius: 4px;
    white-space: nowrap;
`;
