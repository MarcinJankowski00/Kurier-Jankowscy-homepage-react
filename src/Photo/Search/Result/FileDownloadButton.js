import styled from 'styled-components';

const DownloadButton = styled.button`
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 20px;
    border: 2px solid ${({ theme }) => theme.color.teal};
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.teal};
        border: 2px solid ${({ theme }) => theme.color.teal};
        transition: 0.5s;
        color: ${({ theme }) => theme.color.white};;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
`;

const FileDownloadButton = ({ filename, src }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <DownloadButton onClick={handleDownload}>Pobierz rozkład przystanku</DownloadButton>;
};

export default FileDownloadButton;