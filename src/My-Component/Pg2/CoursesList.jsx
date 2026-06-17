import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';




function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <>
    
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="categories" title="Categories">
        Trending Courses
      </Tab>
      <Tab eventKey="photography" title="Photo & Design">
        Most Popular Courses
      </Tab>
      <Tab eventKey="information & technology" title="Information & Technology" >
        Most Viewed Courses
      </Tab>
    </Tabs>
    </>
  );
}

export default ControlledTabsExample;