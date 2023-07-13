

const todoTitle = "call family ";
const title = "this is my country";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card() {
  return  <div className="card">
    
    <h1 className="desc ">{todoTitle}</h1>
    <p className="cardTitle">{title}</p>
    <p className="footer">{dateName + "/" + monthName + "/" + currentYear}</p>
  </div>;
}
export default  Card;