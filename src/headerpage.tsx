import "./headerpage.css";
function Headerpage({isOpen, setIsopen}: {isOpen:Boolean; setIsopen:React.Dispatch<React.SetStateAction<boolean>>;}) {
  return (
    <header>
      <div className="header-left">
        <h1 className="heading">Photosen</h1>
      </div>
      <div className="header-mid" style={{right: isOpen? "0" : ""}}>
        <button className="cancle" onClick={function(){
          setIsopen(false)
        }}>X</button>
        <nav>
        <ul className="photosen-list">
          <li><a href="/home"  className="photosen-option">HOME</a></li>
          <li ><a href="/gallery" className="photosen-option">GALLERY</a></li>
          <li ><a href="/service" className="photosen-option">SERVICES</a></li>
          <li ><a href="/about" className="photosen-option">ABOUT</a></li>
          <li ><a href="/contact" className="photosen-option">CONTACT</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Headerpage;