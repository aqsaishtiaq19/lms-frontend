import React from 'react'
import SearchLearnInput from './SearchBtn'
import TagTypesExample from './trending'
import StudentDetail from './StudentDetail'
import WhishlistButton from './Whishlistbtn'
import WishlistCards from './WishlistCards'
import AboutCard from './AboutUs'
function Student() {
  return (
    <div>
      <SearchLearnInput />
      <TagTypesExample />
      <StudentDetail />
      <WhishlistButton/>
      <WishlistCards/>
      <AboutCard/>
    </div>
  )
}

export default Student
