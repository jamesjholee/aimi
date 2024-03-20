document.addEventListener("DOMContentLoaded", function() {
  const imageUrls = [
      "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
      "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
      "https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg",
      "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
      "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
      "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
      "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
      "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
      "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg"
  ];

  const container = document.getElementById("imageContainer");

  // Load initial images
  loadImages();

  // Load more images when scroll to the bottom
  window.addEventListener("scroll", function() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          loadImages();
      }
  });

  function loadImages() {
      const numberOfImagesToAdd = 20; // Change this number as needed
      for (let i = 0; i < numberOfImagesToAdd; i++) {
          const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
          const imageWrapper = document.createElement("label");
          imageWrapper.classList.add("image-checkbox");

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.classList.add("checkbox");
          imageWrapper.appendChild(checkbox);

          const imageOverlay = document.createElement("div");
          imageOverlay.classList.add("image-overlay");
          imageWrapper.appendChild(imageOverlay);

          imageWrapper.style.backgroundImage = `url('${randomImageUrl}')`;
          container.appendChild(imageWrapper);
      }
  }
});
