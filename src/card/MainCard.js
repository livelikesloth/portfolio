import'./MainCard.css';

function MainCard(){
  return(
    <div className="cardFrame">
      <div className="logo-container">
        <div className="logo-box">
          <p id="hyunj">HYUNJ</p> 
          <p id="m">M</p>
        </div>
        <div className="logo-box" id="in">IN</div>
        
      </div>
      <div className="item-container">
        <p className="item"><a href="/">About</a></p>
        <p className="item"><a href="/">Portfolio</a></p>
        <p className="item"><a href="/">Blog</a></p>
        <p className="item"><a href="/">Github</a></p>
        <p className="item"><a href="/">Instagram</a></p>               
      </div>
    </div>
  );
}
export default MainCard;
