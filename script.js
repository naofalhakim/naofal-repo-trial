// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe section titles for fade-in animation
document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe achievement cards
document.querySelectorAll('.achievement-card').forEach(card => {
    observer.observe(card);
});

// Observe portfolio cards
document.querySelectorAll('.portfolio-card').forEach(card => {
    observer.observe(card);
});

// Download CV function (placeholder)
function downloadCV() {
    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank');
    
    // Create a clean version for PDF generation
    const cleanContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Moch. Agusta Naofal H - Mobile Developer CV</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: white; padding: 20px; }
            .cv-container { max-width: 800px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #6366f1; }
            .profile-photo { width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 20px; display: block; border: 3px solid #6366f1; }
            .name { font-size: 2.5rem; font-weight: 700; color: #1f2937; margin-bottom: 10px; }
            .title { font-size: 1.3rem; color: #6366f1; margin-bottom: 15px; }
            .summary { font-size: 1rem; color: #6b7280; max-width: 600px; margin: 0 auto; }
            .section { margin-bottom: 30px; }
            .section-title { font-size: 1.5rem; font-weight: 600; color: #1f2937; margin-bottom: 15px; padding-bottom: 5px; border-bottom: 1px solid #e5e7eb; }
            .experience-item { margin-bottom: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; }
            .job-title { font-size: 1.2rem; font-weight: 600; color: #1f2937; }
            .company { color: #6366f1; font-weight: 500; }
            .duration { color: #6b7280; font-size: 0.9rem; }
            .achievements-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .achievement-item { padding: 10px; background: #f8fafc; border-radius: 6px; border-left: 3px solid #6366f1; }
            .portfolio-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .portfolio-item { padding: 15px; background: #f8fafc; border-radius: 8px; }
            .tech-stack { margin-top: 10px; }
            .tech-tag { display: inline-block; background: #6366f1; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 5px; margin-bottom: 5px; }
            .contact-info { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .contact-item { padding: 10px; background: #f8fafc; border-radius: 6px; }
            ul { list-style: none; padding-left: 0; }
            li { position: relative; padding-left: 15px; margin-bottom: 5px; }
            li::before { content: '•'; position: absolute; left: 0; color: #6366f1; font-weight: bold; }
            @media print { body { padding: 0; } .cv-container { max-width: none; } }
        </style>
    </head>
    <body>
        <div class="cv-container">
            <div class="header">
                <img src="profile-photo.jpg" alt="Moch. Agusta Naofal H" class="profile-photo">
                <h1 class="name">Moch. Agusta Naofal H</h1>
                <h2 class="title">React Native / Mobile Developer</h2>
                <p class="summary">Mobile developer with 7+ years of experience building scalable and user-friendly applications for Android and iOS. Currently working as React Native Mobile Developer at EdgeProp Singapore.</p>
            </div>
            
            <div class="section">
                <h2 class="section-title">Professional Experience</h2>
                <div class="experience-item">
                    <h3 class="job-title">React Native Mobile Developer</h3>
                    <p><span class="company">EdgeProp Singapore</span> | <span class="duration">Feb 2022 - Present</span></p>
                    <p><strong>Projects:</strong> The Edge Singapore (news portal), EdgeProp Singapore (e-commerce app)</p>
                    <ul>
                        <li>Over six years of experience developing high-performance mobile applications using React Native</li>
                        <li>Coordinated with cross-functional teams to deliver high-quality applications</li>
                        <li>Developed and integrated payment gateways for seamless in-app purchases</li>
                        <li>Built Text-to-Speech features and advertising integration (Google Ad Manager)</li>
                        <li>Implemented customizable user experience features (dark mode, theme settings)</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <h3 class="job-title">Mobile Developer</h3>
                    <p><span class="company">PT. Indocyber Global Teknologi</span> | <span class="duration">Sep 2020 - Feb 2022</span></p>
                    <ul>
                        <li>Maintained and developed scalable apps for Trakindo's core business systems</li>
                        <li>Enhanced HCMS App with new overtime request/approval feature</li>
                        <li>Built dashboards for Trakindo Operational App using React JS</li>
                        <li>Implemented reusable design components to accelerate development</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <h3 class="job-title">Mobile Developer</h3>
                    <p><span class="company">PT. Tanijoy Agriteknologi Nusantara</span> | <span class="duration">Sep 2019 - Sep 2020</span></p>
                    <ul>
                        <li>Built Surveyor & Farming Apps to support agricultural operations</li>
                        <li>Applied Jobs-To-Be-Done framework to design features aligned with farmers' needs</li>
                        <li>Added financial features to farming apps, improving efficiency</li>
                    </ul>
                </div>
                <div class="experience-item">
                    <h3 class="job-title">Android Developer</h3>
                    <p><span class="company">PT. Ursabyte</span> | <span class="duration">Feb 2019 - May 2019</span></p>
                    <ul>
                        <li>Developed sub-features of Paytren Connect App (chat, video call, voice call)</li>
                        <li>Built TVRI Ramadhan App with live streaming features</li>
                    </ul>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">Key Achievements</h2>
                <div class="achievements-grid">
                    <div class="achievement-item"><strong>50k+ Downloads</strong><br>Total app downloads across projects on Play Store</div>
                    <div class="achievement-item"><strong>First Place</strong><br>House of Technology National App Innovation (UB, 2018)</div>
                    <div class="achievement-item"><strong>Runner-Up</strong><br>Annual Informatics Competition (UNDIP, 2018)</div>
                    <div class="achievement-item"><strong>Favorites Winner</strong><br>Joints App Innovation (UGM, 2018)</div>
                    <div class="achievement-item"><strong>Top 15 Nominee</strong><br>Asia Pacific ICT Awards (APICTA, 2018, Guangzhou)</div>
                    <div class="achievement-item"><strong>Outstanding Graduate</strong><br>Faculty of Informatics, Telkom University (2019)</div>
                    <div class="achievement-item"><strong>First Place</strong><br>Telemedicine Innovation Challenge (Monash Malaysia, 2017)</div>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">Portfolio Projects</h2>
                <div class="portfolio-grid">
                    <div class="portfolio-item">
                        <h3>Chateaux De' Cashier</h3>
                        <p>iOS POS system for dine-in, delivery, and pickup orders (2021).</p>
                        <div class="tech-stack">
                            <span class="tech-tag">iOS</span>
                            <span class="tech-tag">Swift</span>
                            <span class="tech-tag">Core Data</span>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <h3>AR Razi Mobile App</h3>
                        <p>Hospital management app (patient shuttle, queues, reminders, health info) (2020).</p>
                        <div class="tech-stack">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">AR</span>
                            <span class="tech-tag">Firebase</span>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <h3>Exotic Bromo App</h3>
                        <p>Mobile application for travel booking and tour management at Mount Bromo, Indonesia.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Android</span>
                            <span class="tech-tag">iOS</span>
                            <span class="tech-tag">Travel API</span>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <h3>To-Do Diet App</h3>
                        <p>Telemedicine app; Winner, Monash Malaysia Innovation Challenge; APICTA nominee (2017).</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Android</span>
                            <span class="tech-tag">Java</span>
                            <span class="tech-tag">Telemedicine</span>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <h3>Foodrient App</h3>
                        <p>Multiple national competition wins (UB, UGM, ITB) (2017–2018).</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Android</span>
                            <span class="tech-tag">Java</span>
                            <span class="tech-tag">Nutrition API</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">Contact Information</h2>
                <div class="contact-info">
                    <div class="contact-item"><strong>Email:</strong> hakimnaofal@gmail.com</div>
                    <div class="contact-item"><strong>GitHub:</strong> github.com/naofalhakim</div>
                    <div class="contact-item"><strong>LinkedIn:</strong> linkedin.com/in/naofal</div>
                    <div class="contact-item"><strong>Play Store:</strong> Naofal Developer Profile</div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Skills</h2>
                    <div class="skills-grid">
                        <div class="skill-category">
                            <h4>Mobile Development</h4>
                            <p>React Native, Android Native (Java/Kotlin)</p>
                        </div>
                        <div class="skill-category">
                            <h4>Web Development</h4>
                            <p>React JS</p>
                        </div>
                        <div class="skill-category">
                            <h4>Languages</h4>
                            <p>Java, Kotlin, JavaScript, TypeScript</p>
                        </div>
                        <div class="skill-category">
                            <h4>Tools & Frameworks</h4>
                            <p>Redux, Zustand, Firebase, Axios, Google Maps API, Jenkins, Jest</p>
                        </div>
                    </div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Education</h2>
                    <div class="education-item">
                        <h4>Telkom University — B.Sc. Informatics Engineering</h4>
                        <p>(2015 – 2019, Bandung)</p>
                        <p>Key courses: Data Structures, OOP, AI, Machine Learning, Data Mining, Databases, Networking.</p>
                    </div>
                    <div class="education-item">
                        <h4>VHS Telkom Malang — Software Engineering</h4>
                        <p>(2012 – 2015, Malang)</p>
                        <p>Focus: Web Development (Front/Back End), Android Native, Multimedia (Video, Illustration).</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    
    // Write content to the new window
    printWindow.document.write(cleanContent);
    printWindow.document.close();
    
    // Wait for content to load, then trigger print dialog
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
        }, 500);
    };
    
    // Show success message
    showNotification('CV PDF is being generated. Please use your browser\'s print dialog to save as PDF.', 'success');
}

// Notification system for user feedback
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 500;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Add CSS animations
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add typing effect to profile name (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        const originalText = profileName.textContent;
        setTimeout(() => {
            typeWriter(profileName, originalText, 150);
        }, 1000);
    }
});

// Add parallax effect to profile section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const profileSection = document.querySelector('.profile-section');
    const rate = scrolled * -0.5;
    
    if (profileSection) {
        profileSection.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effect to tech tags
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.backgroundColor = '#F0C8D8'; // Light Pink
        this.style.color = '#1A56B8'; // Dark Blue
        this.style.borderColor = '#F0C8D8';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#F8F9FA'; // Soft Gray
        this.style.color = '#1A56B8'; // Dark Blue Text
        this.style.borderColor = '#E2E8F0'; // Border Color
    });
});

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add scroll progress indicator (optional enhancement)
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #1A56B8, #F0C8D8);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu on escape
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link, .btn, .contact-link').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #1A56B8';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

console.log('CV Website loaded successfully! 🚀');
