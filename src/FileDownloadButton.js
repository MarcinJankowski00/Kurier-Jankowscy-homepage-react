import React from 'react';
import styled, { css } from 'styled-components';

const DownloadButton = styled.button`
    font-size: 20px;
    background-color: transparent;
    padding: 12px 24px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.teal};
    border: 2px solid ${({ theme }) => theme.color.teal};

    ${({ variant }) => variant === 'schedule' && css`
        margin-top: 30px;
        margin-bottom: 30px;
        &:hover {
            background-color: ${({ theme }) => theme.color.teal};
            border: 2px solid ${({ theme }) => theme.color.teal};
            transition: 0.5s;
            color: ${({ theme }) => theme.color.white};;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            font-size: 15px;
        }
    `}

    ${({ variant }) => variant === 'photo' && css`
        width: 257px;
        border: 1px solid ${({ theme }) => theme.color.white};
        color: #fff;
        &:hover {
            background-color: ${({ theme }) => theme.color.white};
            transition: 0.5s;
            color: ${({ theme }) => theme.color.teal};;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            width: 100%;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
            font-size: 15px;
        }
    `}    
`;

const FileDownloadButton = ({ filename, src, variant, label }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = src;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return <DownloadButton onClick={handleDownload} variant={variant}>{label}</DownloadButton>;
};

export default FileDownloadButton;