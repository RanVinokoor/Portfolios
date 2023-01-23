const Footer = () => {
  return (
    <p className="text-center">
      <span>
        <i className="bi bi-camera2"></i> <b>Portfolios</b>
      </span>
      <span className="mx-1">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </p>
  );
};

export default Footer;
