import React, { useState } from "react";
import "./App.css"

var place = {
  "🚣": 'Person Rowing Boat',
'🗾' : 'Map of Japan',
'🌋' : 'Volcano',
'🗻': 'Mount Fuji',
'🏕️': 'Camping',
'🏜️': 'Desert',
'🏝️': 'Desert Island',
'🏞️': 'National Park',
'🏟️': 'Stadium',
'🏛️': 'Classical Building',
'🏗': 'Building Construction',
'🛖': 'Hut',
'🏘️': 'Houses'
};

let placeArray = Object.keys(place);

export default function App() {
  let [emoji, updateEmoji] = useState("");

  function emojiHandler(emoji) {
    updateEmoji(place[emoji])
  }

  return (
    <div className="App">
      <h1 className="header">Icon Interpreter</h1>
      <h2 className="ans">{emoji}</h2>      
      <h3 className="text">Select any icon from below options</h3>
      <div className="container">
        {placeArray.map((key) => (
          <span className="items" onClick={() => emojiHandler(key)}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
}
