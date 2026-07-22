const addToWishlist = async (courseId, e) => {
  e.preventDefault();
  e.stopPropagation();

  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    if (!courseId) {
      alert("Invalid course ID");
      return;
    }

    // 🔥 GET CURRENT WISHLIST FIRST
    const existing = await axios.get(
      "https://my-projects.bonto.run/api/wishlist",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // 🔥 CHECK IF COURSE ALREADY EXISTS
    const alreadyAdded = existing.data.find(
      (item) => item.course._id === courseId
    );

    if (alreadyAdded) {
      alert("Already in wishlist ❤️");
      return;
    }

    // 🔥 ADD COURSE
    await axios.post(
      "https://my-projects.bonto.run/api/wishlist",
      { courseId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Added to Wishlist ❤️");

  } catch (error) {
    console.log("Wishlist Error:", error.response?.data);
    alert(error.response?.data?.message || "Failed to add wishlist");
  }
};