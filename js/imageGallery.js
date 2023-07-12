const imageUrls = [
    "images/flowers-pink-small.jpg",
    "images/flowers-purple-small.jpg",
    "images/flowers-red-small.jpg",
    "images/flowers-white-small.jpg",
    "images/flowers-yellow-small.jpg",
];

function buildGalleryItemList() {
    const galleryItemList = [];
    let galleryItem = {};
    imageUrls.forEach((imageUrl) => {
        let color = imageUrl.split("-")[1];
        galleryItem = {
            src: imageUrl,
            alt: "Photo of " + color + " flowers",
            classList: "inactive",
        };
        galleryItemList.push(galleryItem);
    });
    return galleryItemList;
}

galleryItemList = buildGalleryItemList();
console.log(galleryItemList);

function buildThumbnailList() {
    const ul = document.getElementById("thumbnail-list");

    galleryItemList.forEach((galleryItem) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = galleryItem.src;
        img.alt = galleryItem.alt;
        img.classList.add(galleryItem.classList);

        li.appendChild(img);
        ul.appendChild(li);
    });

    const thumbnailImages = ul.querySelectorAll("li img");
    return thumbnailImages;

    // imageUrls.forEach((imageUrl) => {
    //     let color = imageUrl.split("-")[1];
    //     const li = document.createElement("li");
    //     const img = document.createElement("img");
    //     img.src = imageUrl;
    //     img.alt = "Photo of " + color + " flowers";
    //     img.classList.add("inactive");

    //     li.appendChild(img);
    //     ul.appendChild(li);
    // });

    // const thumbnailImages = ul.querySelectorAll("li img");
    // return thumbnailImages;
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