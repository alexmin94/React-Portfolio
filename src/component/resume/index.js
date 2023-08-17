import React from 'react'

export default function Resume() {
    const handleDownload = () => {
        // Replace 'resume.pdf' with the actual path to your resume file
        const resumeFilePath = '/resume.pdf';
    
        // Create a link element and simulate a click to trigger the download
        const link = document.createElement('a');
        link.href = resumeFilePath;
        link.target = '_blank';
        link.download = 'your_resume.pdf'; // Specify the desired download file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div className='resume'>
        <div>
      <h2>Download Resume</h2>
      <button onClick={handleDownload}>Download</button>
    </div>

    </div>
  )
}
