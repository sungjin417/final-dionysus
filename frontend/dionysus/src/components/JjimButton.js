import React, { useState } from 'react';
import axios from 'axios';

function JjimButton({ alcoholName, isJjim }) {
  const [jjim, setJjim] = useState(isJjim);

  const toggleJjim = async () => {
    if (jjim) {
      await axios.delete(`http://localhost:8111/jjim/remove`, { params: { alcoholName } });
    } else {
      await axios.post(`http://localhost:8111/jjim/add`, { alcoholName });
    }
    setJjim(!jjim);
  };

  return (
    <button onClick={toggleJjim}>
      {jjim ? '찜 해제' : '찜하기'}
    </button>
  );
}

export default JjimButton;
