document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navlist a');
    
    // Function to highlight navlist item based on section visibility
    function highlightNavLink(entries) {
        entries.forEach(entry => {
            const targetId = entry.target.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.navlist a[href="#${targetId}"]`);
            
            if (entry.isIntersecting) {
                correspondingNavLink.classList.add('active');
                correspondingNavLink.style.color = 'var(--main-color)';
            } else {
                correspondingNavLink.classList.remove('active');
                correspondingNavLink.style.color = 'var(--second-color)';
            }
        });
    }
    
    // Create Intersection Observer
    const observer = new IntersectionObserver(highlightNavLink, {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Adjust threshold as needed
    });

    // Observe each section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add smooth scrolling on navlink click
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const currentActive = document.querySelector('.navlist a.active');
            currentActive.classList.remove('active');
            currentActive.style.color = 'var(--second-color)';
            this.classList.add('active');
            this.style.color = 'var(--main-color)';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
