import socials from "../utils/socials";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        {socials.map((social, indx) => (
          <div
            key={indx}
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <img src={social.icon} alt={social.icon} height={32} />
            <a href={social.link?social.link:`tel:${social.contact}`} style={{textDecoration:"none" , color:"white"}}>
              <p style={{ fontWeight: "bold" }}>{social.contactOption}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
