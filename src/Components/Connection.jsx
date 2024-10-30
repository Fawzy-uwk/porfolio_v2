import { ArrowRightCircle, Phone } from "react-bootstrap-icons";

function Connection() {
  return (
    <div className="connection-bx">
      <div className="call">
        <Phone size={30} color="#4a207c"/>
        
        
        <div className="content">
          <a href="tel:01553416937">01553416937</a> <strong><span>OR</span></strong>{" "}
          <a href="tel:01091526711">01091526711</a>
        </div>
      </div>
      <div className="cv">
        <h3>Here Is My CV to know more:</h3>
        <a href="#c" className="btn">
          View CV <ArrowRightCircle size={25} />
        </a>
      </div>
    </div>
  );
}

export default Connection;
