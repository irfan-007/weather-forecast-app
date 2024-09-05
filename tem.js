async function isImageUrlValid(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.error("Error checking image URL:", error);
    // throw new Error(error);
  }
}

// Example usage
const imageUrl = "https://picsum.photos/id/238/200/300axb";

isImageUrlValid(imageUrl).then((isValid) => {
  if (isValid) {
    console.log("The URL is a valid image.");
  } else {
    console.log("The URL is not a valid image.");
  }
});
