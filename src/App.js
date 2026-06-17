
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesComponent from "./My-Component/Page-1/Categories";
import Pg1 from "./My-Component/Page-1/Pg1";
import Carousel from "./My-Component/Page-1/Carousal";
import Card from "./My-Component/Page-1/expert";
// import Cards from "./My-Component/Page-1/Categories";
// import CategoriesCard from "./My-Component/Page-1/CategoriesCard";

import ControlledTabsExample from "./My-Component/Pg2/CoursesList";
import Courses from "./My-Component/Page-1/Pg1";
import WishlistCards from "./My-Component/Pg3-StDetails/WishlistCards";
// import {useState} from "./My-Component/Pg2/useState";

// import CoursesList from "./My-Component/Pg2/CoursesList";
import Pg2 from "./My-Component/Pg2/Pg2";
import Student from "./My-Component/Pg3-StDetails/Student";
import SignUpForm from "./My-Component/SignUP/SignUp";
import LogInForm from "./My-Component/Sign-In/SignIn";
// import './Css.Style/Pg1.Style.Css';

import AllCourses from "./My-Component/AllCourses";

function App() {
  return (
    <div>
      <Pg1 />
      <Carousel />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Card />
              <CategoriesComponent />
              <AllCourses />
            </>
          }
        />


        {/* route for CoursesList */}
        <Route
          path="/CoursesList"
          element={<ControlledTabsExample /> }
        />
        
         

        <Route path="/Pg1" element={<Courses />} />

        <Route path="/Pg2" element={<Pg2 />} />

        <Route
          path="/My-Component/Pg2/Pg2"
          element={<CategoriesComponent />}
        />
        <Route path="/Student" element={<Student />} />
        <Route path="/SignUp" element={<SignUpForm />} />
        
         <Route path="/SignIn" element={<LogInForm />} />
         <Route path="/BrowseCards" element={<Pg2 />} />
         <Route path="/WishlistCards" element={<WishlistCards />} />
      </Routes>
    </div>
  );
}

export default App;





