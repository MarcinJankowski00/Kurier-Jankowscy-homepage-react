import styled from 'styled-components';

const DownloadButton = styled.button`
    margin-left: 10px;
    font-size: 20px;
    border: 1px solid ${({ theme }) => theme.color.white};;
    background-color: transparent;
    color: #fff;
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.color.white};
        transition: 0.5s;
        color: ${({ theme }) => theme.color.teal};;
    }
`;

const FileDownloadButton = ({ filename, src }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <DownloadButton onClick={handleDownload}>Pobierz rozkład jazdy</DownloadButton>;
};

export default FileDownloadButton;