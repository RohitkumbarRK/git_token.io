document.addEventListener('DOMContentLoaded', function() {
    const objectDetectionButton = document.getElementById('objectDetectionButton');
    const imageDetectionButton = document.getElementById('imageDetectionButton');
    const backButton = document.getElementById('backButton');
    const slider = document.querySelector('.slider');
    const videoContainer = document.getElementById('video-container');
    const video = document.getElementById('video');

    objectDetectionButton.addEventListener('click', () => {
        slider.style.transform = 'translateX(-50%)';
        document.getElementById('background-video').style.display = 'none';
        document.getElementById('live-background-video').style.display = 'block';
        videoContainer.style.display = 'block';
        startVideo();
    });

    imageDetectionButton.addEventListener('click', () => {
        slider.style.transform = 'translateX(-50%)';
        document.getElementById('background-video').style.display = 'none';
        document.getElementById('live-background-video').style.display = 'block';
        videoContainer.style.display = 'block';
        startVideo();
    });

    backButton.addEventListener('click', () => {
        slider.style.transform = 'translateX(0)';
        document.getElementById('background-video').style.display = 'block';
        document.getElementById('live-background-video').style.display = 'none';
        videoContainer.style.display = 'none';
        stopVideo();
    });

    async function startVideo() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
        } catch (err) {
            console.error('Error accessing webcam:', err);
        }
    }

    function stopVideo() {
        const stream = video.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
        video.srcObject = null;
    }
});
