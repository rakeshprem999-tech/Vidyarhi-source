function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function getStarted() {
  alert('Welcome aboard! Redirecting to dashboard simulation.');
}

function loadHomeData() {
  alert('Loading latest updates for the home section...');
}

function readMore(articleId) {
  let message = '';
  if (articleId === 1) {
    message = 'Full article on AI in Education: AI tools are transforming learning by providing personalized experiences, automating grading, and offering intelligent tutoring systems.';
  } else if (articleId === 2) {
    message = 'Full article on Mobile App Dev Trends: Cross-platform frameworks, AI/ML integration, enhanced security, and progressive web apps are shaping the industry.';
  } else if (articleId === 3) {
    message = 'Full article on Cybersecurity Essentials: Use strong passwords, enable two-factor authentication, beware of phishing, update software, and respect data privacy.';
  }
  openModal(message);
}

function likeArticle(articleId) {
  alert('You liked article ' + articleId + '! Thank you for your feedback.');
}

function applyNow(jobId) {
  let message = '';
  if (jobId === 1) {
    message = 'Applying for Junior Software Developer. Please upload your resume.';
  } else if (jobId === 2) {
    message = 'Applying for Data Analysis Internship. Redirecting to company portal.';
  } else if (jobId === 3) {
    message = 'Applying for UX/UI Design Roles. Please submit your portfolio.';
  }
  openModal(message);
}

function refreshJobs() {
  alert('Refreshing job listings... New opportunities might be available soon!');
}

function markAsRead(notificationId) {
  const notificationItem = document.getElementById('notif-' + notificationId);
  if (notificationItem) {
    notificationItem.style.backgroundColor = '#d4edda';
    notificationItem.style.color = '#155724';
  }
}