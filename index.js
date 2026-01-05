let generateImageForm = document.getElementById("generate-image-form");
let formInput = document.getElementById("input-value");
let imageContainerText = document.getElementById("imageContainerText");
let imageGenerated = document.getElementById("generated-image");
let imageContainer = document.getElementById("images-visible");

async function fetchImages(text) {
  try {
    // Demo placeholder image based on text
    let url = `https://source.unsplash.com/600x400/?${encodeURIComponent(text)}`;

    imageGenerated.src = url;
    imageContainerText.innerText = "Below is your generated image:";
    imageContainer.style.display = "block";

  } catch (error) {
    imageContainerText.innerText = "Something went wrong!";
    console.log(error);
  }
}

generateImageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let enteredText = formInput.value.trim();

  if (enteredText !== "") {
    fetchImages(enteredText);
  } else {
    imageContainerText.innerText = "Input field cannot be empty!";
    imageContainer.style.display = "block";
  }
});
