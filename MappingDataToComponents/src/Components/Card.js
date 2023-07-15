const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props) {
  //props
  // return  <div className="card">

  //   <h1 className="desc ">{props.titleText}</h1>
  //   <p className="cardTitle">{props.descText}</p>
  //   <p className="footer">{dateName + "/" + monthName + "/" + currentYear}</p>
  // </div>;

  //destructuring
  const { titleText, descText } = props;

  return (
    <div className="card">
      <h1 className="desc ">{titleText}</h1>
      <p className="cardTitle">{descText}</p>
      <p className="footer">{dateName + "/" + monthName + "/" + currentYear}</p>
    </div>
  );
}
export default Card;
