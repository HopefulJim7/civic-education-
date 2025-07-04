import API from '../api';

const CertificateDownload = ({ lessonId, score }) => {
  const avatarUrl = `https://ui-avatars.com/api/?name=Jim+Hope`;

  const download = async () => {
    try {
      const res = await API.post(
        '/api/certificates/generate',
        { lessonId, score, avatarUrl },
        { responseType: 'blob' }
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'certificate.pdf';
      link.click();
    } catch {
      alert('Download failed');
    }
  };

  return (
    <button onClick={download} className="btn-primary mt-3 bg-green-600">
      🎓 Download Certificate
    </button>
  );
};

export default CertificateDownload;