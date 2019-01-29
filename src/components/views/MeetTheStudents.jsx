//////////////////////////////////////////////////////////////////
// This page is not to be used until furthur notice from client //
//////////////////////////////////////////////////////////////////
// import React, { Component } from "react";
// import Footer from "../Footer/Footer.jsx";
// import Student from "../Student.jsx";
// import { studentMatrix } from "../../data/studentInfo";
// import ScrollToTop from "../ScrollToTop.jsx";

// export default class MeetTheStudents extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(name) {
//     this.props.history.push(`/${name}`);
//   }

//   render() {
//     return (
//       <div>
//         <ScrollToTop />
//         <div className="ourStudentsHeader">
//           <div className="ourStudentsHeader__text">
//             We are a technology education organization
//           </div>
//           <div className="ourStudentsHeader__subtext">
//             We build post-secondary vocational training programs in East Africa
//           </div>
//         </div>
//         <div className="ourStudents">
//           <div className="ourStudents__header">Our Students</div>

//           {studentMatrix.map(row => (
//             <div className="studentsContainer">
//               {row.map(col => (
//                 <Student
//                   image={col.image}
//                   name={col.name}
//                   info={col.info}
//                   handleClick={this.handleClick}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }
