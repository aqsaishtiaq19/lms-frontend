import React, { useEffect, useState } from "react";
import API from "./Api";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const res = await API.get("/courses");

            console.log("Response data:", res.data);

            setCourses(res.data);
        } catch (err) {
            console.log("Error:", err);
        }
    };

    return (
        <div>
            {/* <h1>All Courses</h1> */}

            {Array.isArray(courses) &&
                courses.map((c) => (
                    <div key={c._id}>
                        <h3 className="title">
                         {typeof c.title === "object"
                        ? c.title.title
                        : c.title || c.course}
                        </h3>
                        <p>{c.description}</p>
                    </div>
                ))}
        </div>
    );
};

export default AllCourses;