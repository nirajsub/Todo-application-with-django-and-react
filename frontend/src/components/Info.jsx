import React from "react";

class Info extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.title);
    }
  render() {
    const title = this.props.title;
    const showTitle = true;
    if (showTitle) {
      return (
        <div>
          <h1 className="heading">{showTitle ? title : ""}</h1>
          <h1>ToDo App</h1>
          <p>For Your personal growth</p>
        </div>
      );
    } else {
      return <p>Empty</p>;
    }
  }
}

export default Info;

// export function Info() {
//     const title = "This is TO-Do Application";
//     const showTitle = true;
//     if (showTitle) {
//       return (
//       <div>
//         <h1 className='heading'>{ showTitle ? title : ""}</h1>
//         <h1 >ToDo App</h1>
//         <p>For Your personal growth</p>
//       </div>
//     );
//     }
//     else {
//       return <p>Empty</p>;
//     }
//   }
