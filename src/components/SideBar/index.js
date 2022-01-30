import "./style.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="img-container">
        <img
          className="imgRedonda"
          src="https://elblogdecarlosferreras.files.wordpress.com/2017/02/564e3f42-e435-4b2c-b527-e7b3cf3786ba.jpg"
        />
        <h3 className="sidebar__auth-name">CARLOS FERRERAS</h3>
      </div>

      <h4 className="sidebar__auth-desc">
        Maestro, Abogado, Historiador, Locutor Columnista y Teologo Academico.
      </h4>

      <h3>Sigueme en las redes sociales</h3>
      <div>
        <img
        className="social-media"
          src="https://www.pngitem.com/pimgs/m/296-2965005_logos-de-redes-sociales-png-transparent-png.png"
          width="180"
        />
      </div>

      <h3>Sigueme en Youtube</h3>
      <div>
        <iframe
          className="video"
          width="180"
          height="225"
          src="https://www.youtube.com/embed/hCVvq5DMWy4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default SideBar;
