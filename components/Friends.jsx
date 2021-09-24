// import React from "react";
// import Card from "./Card";

// function Friends() {
//   return (
//     <div>
//         <Card
//         name="Greg"
//         img="https://i.ibb.co/qsB8nfg/greg.png"
//         likes="01238 584 47 "
//         email="greg@gmail.com"
//       />

//       <Card
//         name="Brandon"
//         img="https://media-exp1.licdn.com/dms/image/C4E03AQH8y529Y07DHg/profile-displayphoto-shrink_100_100/0/1570230124945?e=1637193600&v=beta&t=XGAaKFIXVKIb13P709PNItkoixG9tbabllJtoHnC-uM"
//         likes="Salsa"
//         likes="80838 848 48 88"
//         email="BBrandon@yahoo.com"
//       />

//       <Card
//         name="Tavaris"
//         img="https://media-exp1.licdn.com/dms/image/C4E03AQF8X7VQ2SCmvA/profile-displayphoto-shrink_100_100/0/1629225257909?e=1637193600&v=beta&t=w6BeRe3DusAdM3QBSAl8fo59zEL8YKIb4PFKWkSLTyk"
//         likes="9485 959 8585"
//         email="ttman@tmobile.com"
//       />

//       <Card
//         name="Warunee"
//         img="https://media-exp1.licdn.com/dms/image/C4E03AQGamSIsCSC6fg/profile-displayphoto-shrink_100_100/0/1627940573100?e=1637193600&v=beta&t=zlDBQ_Sjn-bEFhUWXzo3nj841Y8Vf9N7CwBHhduWiZI"
//         likes="84773 37747"
//         email="wuwu34@gmail.com"
//       />

//     </div>
//   );
// }

// export default Friends;

import React, { Component } from "react";
import Card from "./Card";

class Friends extends Component {
  render() {
    return (
      <div>
        <div>
          <Card
            name="Greg"
            img="https://i.ibb.co/qsB8nfg/greg.png"
            likes="01238 584 47 "
            email="greg@gmail.com"
          />
          {/* 
          <Card
            name="Brandon"
            img="https://media-exp1.licdn.com/dms/image/C4E03AQH8y529Y07DHg/profile-displayphoto-shrink_100_100/0/1570230124945?e=1637193600&v=beta&t=XGAaKFIXVKIb13P709PNItkoixG9tbabllJtoHnC-uM"
            likes="Salsa"
            likes="80838 848 48 88"
            email="BBrandon@yahoo.com"
          />

          <Card
            name="Tavaris"
            img="https://media-exp1.licdn.com/dms/image/C4E03AQF8X7VQ2SCmvA/profile-displayphoto-shrink_100_100/0/1629225257909?e=1637193600&v=beta&t=w6BeRe3DusAdM3QBSAl8fo59zEL8YKIb4PFKWkSLTyk"
            likes="9485 959 8585"
            email="ttman@tmobile.com"
          />

          <Card
            name="Warunee"
            img="https://media-exp1.licdn.com/dms/image/C4E03AQGamSIsCSC6fg/profile-displayphoto-shrink_100_100/0/1627940573100?e=1637193600&v=beta&t=zlDBQ_Sjn-bEFhUWXzo3nj841Y8Vf9N7CwBHhduWiZI"
            likes="84773 37747"
            email="wuwu34@gmail.com"
          /> */}
        </div>
        <h2>Friends</h2>
      </div>
    );
  }
}

export default Friends;
