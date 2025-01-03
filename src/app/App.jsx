import React, { useState } from 'react'
import './App.css'
import { FrontPage } from '../pages/front/Front';
import { BackPage } from '../pages/back/Back';

function App() {
  const [visible, setVisible] = useState(false);

  const view = () => {
    setVisible(true);
  };
  const view1 = () => {
    setVisible(false);
  };

  return (
    <div>
      {
        visible ? <BackPage click={view1} />: <FrontPage click={view} />
      }
    </div>
  )
}

export default App;
