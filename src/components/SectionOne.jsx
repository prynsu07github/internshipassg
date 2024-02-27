import awardImage from "../assets/Images/award.png";
import Image2 from "../assets/Images/Image2.png";
const SectionOne = () => {
  return (
    <div className="section__1">
      <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <img src={awardImage} alt="award" className="award__img" />
      </div>
      <div className="right__component">
        <h2>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h2>
        <div >
          <ul>
            <li>
              <p>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </p>
            </li>
            <li>
              <p>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </p>
            </li>
          </ul>
        </div>
        <img src={Image2} alt="Image2" style={{margin:"15px 0"}}/>
        <p>
          Government of India has awarded the <strong>"National Energy Conservation
          Award 2018".</strong> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
