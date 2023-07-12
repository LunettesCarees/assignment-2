const imageUrls = [
    "images/flowers-pink-small.jpg",
    "images/flowers-purple-small.jpg",
    "images/flowers-red-small.jpg",
    "images/flowers-white-small.jpg",
    "images/flowers-yellow-small.jpg",
];

// function buildGalleryObjectList() {
//     const galleryObjectList = [];
//     imageUrls.forEach((imageUrl) => {
//         let color = imageUrl.split("-")[1];
//         const galleryObject = {
//             imageUrl: imageUrl,
//             title: "Photo of " + color + " flowers",
//         };
//         galleryObjectList.push(galleryObject);
//     })
// };


function buildThumbnailList() {
    const ul = document.getElementById("thumbnail-list");

    imageUrls.forEach((imageUrl) => {
        let color = imageUrl.split("-")[1];
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Photo of " + color + " flowers";
        img.classList.add("inactive");

        li.appendChild(img);
        ul.appendChild(li);
    });

    const thumbnailImages = ul.querySelectorAll("li img");
    return thumbnailImages;
}

document.addEventListener("DOMContentLoaded", () => {
    const thumbnailImages = buildThumbnailList();
    thumbnailImages[0].classList.remove("inactive");

    thumbnailImages.forEach((thumbnailImage) => {

        thumbnailImage.addEventListener("click", (e) => {
            const featureImage = document.querySelector("figure img");
            const title = document.querySelector("figcaption");
            featureImage.src = e.target.src.replace('small', 'large');
            title.textContent = e.target.alt;
            thumbnailImages.forEach((thumbnailImage) => {
                thumbnailImage.classList.add("inactive");
            }
            );
            e.target.classList.remove("inactive");

        });
    })
});