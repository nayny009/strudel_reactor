import logo from "../assets/logo.png";

function PageTitle() {
  return (
      <>
          <div className="title-wrapper">
              <img src={logo} alt="Logo Img" className="logo" />
              <h2 className="page-title">Strudel Demo</h2>
          </div>
      </>
  );
}

export default PageTitle;