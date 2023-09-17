const LinkIcon = ({ icon, onMouseEnter, onMouseLeave, onClick }) => (
  <p
    className="z-30 max-md:ml-5"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {icon}
  </p>
);

export default LinkIcon;
