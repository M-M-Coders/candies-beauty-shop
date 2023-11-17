// OurTeam.js

import React from 'react';
import '../styles/OurTeam.css';

function OurTeam() {
  return (
    <div className="our-team-container">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        <div className="team-member">
          <img
            src="https://www.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-260nw-640011838.jpg"
            alt="Team Member 1"
            className="team-member-image"
          />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
          <p>
            John is the visionary leader behind [Your Beauty Shop Name]. With a passion for beauty and a keen business acumen, he has steered the ship towards becoming a trusted name in the industry.
          </p>
        </div>
        <div className="team-member">
          <img
            src="data:image/jpeg;base64,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"
            alt="Team Member 2"
            className="team-member-image"
          />
          <h3>Jane Smith</h3>
          <p>Head of Skincare</p>
          <p>
            Jane is our skincare guru, bringing a wealth of knowledge about the latest trends and effective skincare solutions. Her expertise ensures that our skincare collection is top-notch.
          </p>
        </div>
        <div className="team-member">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJu5SWVLFgaUSspD9MAtnZTog34TxHj_QBg&usqp=CAU"
            alt="Team Member 3"
            className="team-member-image"
          />
          <h3>Alex Johnson</h3>
          <p>Makeup Maestro</p>
          <p>
            Alex is the creative force behind our makeup selection. As a seasoned makeup artist, Alex curates a range of products that cater to both classic beauty looks and cutting-edge trends.
          </p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
}

export default OurTeam;
