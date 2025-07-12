document.addEventListener('DOMContentLoaded', function() {
    const greetBtn = document.getElementById('greetBtn');
    const greetingDiv = document.getElementById('greeting');

    greetBtn.addEventListener('click', function() {
        const name = prompt("What's your name?");
        if (name && name.trim() !== "") {
            greetingDiv.textContent = `Hello, ${name}! Welcome to my portfolio.`;
        } else {
            greetingDiv.textContent = "Hello! Welcome to my portfolio.";
        }
    });
});

// Modal code for project images
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementById('closeModal');
    document.querySelectorAll('.view-project').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = link.getAttribute('data-img');
            modalImg.src = imgSrc;
            modal.style.display = 'flex';
        });
    });
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImg.src = '';
    });
    // Optional: close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });