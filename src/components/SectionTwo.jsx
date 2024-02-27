import Products from "../assets/Images/products.png";

const facilities = [
  "CHEMICALS",
  "PROCESS POWER WATER",
  "WASTE WATER OILS",
  "GAS PHARMA SUGARS",
  "DISTILLERIES PAPER",
  "PULP MARINE",
  "DEFENCE METAL",
  "MINING FOOD",
  "BEVERAGE PETROCHEMICAL",
  "REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE","RESIDENTIAL"
]

const SectionTwo = () => {
  return (
    <div className="section__2">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="products">
        <img src={Products} alt="products" />
        <p style={{textAlign:"center" }}>
        Valves - Pumps - Pipes - IoT Drives",Controllers - Wires",Cables -
        Solar Systems - Motors
      </p>
      </div>
      <p style={{fontWeight:"bold" , textAlign:"center" , margin:"20px 0"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <div className="facility">
        {
          facilities.map((facility , indx) => (
            <div key={indx}>
              <p style={{borderRight:"2px solid rgb(239, 59, 59)" , padding:"0px 5px" , width:"object-fit"}}>{facility}</p>
            </div> 
          ))
        }
      </div>
    </div>
  );
};

export default SectionTwo;
