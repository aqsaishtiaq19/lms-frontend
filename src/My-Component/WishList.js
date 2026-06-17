import API from "./Api";

const addToWishlist = async (course) => {
  try {
    const token = localStorage.getItem("token");

    await API.post(
      "/wishlist",
      { courseId: course._id },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Added to Wishlist ❤️");
  } catch (err) {
    console.log(err);
      if (err.response?.status === 400) {
      alert("This course is already in your wishlist ❤️");
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
  }
;

export default addToWishlist;