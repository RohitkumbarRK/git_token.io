document.addEventListener('DOMContentLoaded', () => {
    const objectDetectionButton = document.getElementById('objectDetectionButton');
    const imageDetectionButton = document.getElementById('imageDetectionButton');
    const backButton = document.getElementById('backButton');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const liveDetectionSlide = document.getElementById('liveDetection');
    const video = document.getElementById('video');

    // Handle Object Detection Button Click
    objectDetectionButton.addEventListener('click', () => {
        document.querySelector('#detectionTitle').textContent = 'Discover any Object instantly and find it on Amazon';
        document.querySelector('.slider').style.transform = 'translateX(-100%)';
    });

    // Handle Image Detection Button Click
    imageDetectionButton.addEventListener('click', () => {
        document.querySelector('#detectionTitle').textContent = 'Identify anyone’s face instantly and find their information';
        document.querySelector('.slider').style.transform = 'translateX(-100%)';
    });

    // Handle Back Button Click
    backButton.addEventListener('click', () => {
        document.querySelector('.slider').style.transform = 'translateX(0%)';
    });

    // Handle Search Button Click
    searchButton.addEventListener('click', () => {
        searchInput.style.display = searchInput.style.display === 'none' || searchInput.style.display === '' ? 'block' : 'none';
    });

    // Initialize Live Detection Webcam
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
                video.play();
            })
            .catch(error => {
                console.error('Error accessing webcam:', error);
            });
    }

    // Modal functionality for About Page
    const aboutButton = document.querySelector('.nav-button[href="#about"]');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeModal = document.createElement('span');

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    closeModal.classList.add('close');
    closeModal.textContent = '×';

    modalContent.innerHTML = `
        <h2>About Detection Technologies</h2>
        <p>Detection services leverage cutting-edge AI and machine learning technologies to identify and analyze objects and images with high accuracy and speed. Object detection algorithms can recognize a wide range of items in various environments, from everyday objects to complex scenes. Image detection focuses on identifying and processing visual information to understand and categorize images based on predefined criteria. These technologies are used in various applications, including security systems, automated surveillance, and image analysis for various industries.</p>
    `;

    modalContent.appendChild(closeModal);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Show modal on About button click
    aboutButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Hide modal on close button click
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Hide modal on outside click
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});
