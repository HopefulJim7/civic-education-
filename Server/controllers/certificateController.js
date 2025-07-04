import Lesson from '../models/Lesson.js';
import { generateCertificate } from '../utils/certificateUtils.js';

export const issueCertificate = async (req, res) => {
  try {
    const { lessonId, score, avatarUrl } = req.body;
    const user = req.user;

    if (score < 80) {
      return res.status(403).json({ message: 'Minimum 80% required for certificate.' });
    }

    const lesson = await Lesson.findById(lessonId);
    const topic = lesson?.topic || 'Civic Education';

    const filePath = await generateCertificate({
      name: user.name,
      topic,
      score,
      avatarUrl
    });

    res.download(filePath, `${user.name}-${topic}-certificate.pdf`);
  } catch (err) {
    res.status(500).json({ message: 'Certificate error', error: err.message });
  }
};