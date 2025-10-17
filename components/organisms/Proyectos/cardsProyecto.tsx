import { Row, Col } from "antd";
import SelectTittle from "components/atoms/Anytings/selectTittle";
import iconc from "/assets/ICONC.png";
import auto from "/assets/autoRobot.png";
import CardProyecto from "components/molecules/ProyectoMolecules/cardProyecto";

const proyectosFiltrados = [
  {
    id: 1,
    titulo: "Proyecto 1",
    descripcion: "Descripción del proyecto 1",
    imagen: auto,
    tecnologias: [{ src: iconc, name: "Java" }],
  },
  {
    id: 2,
    titulo: "Proyecto 2",
    descripcion: "Descripción del proyecto 2",
    imagen: auto,
    tecnologias: [{ src: iconc, name: "Java" }],
  },
  {
    id: 3,
    titulo: "Proyecto 3",
    descripcion: "Descripción del proyecto 3",
    imagen: auto,
    tecnologias: [{ src: iconc, name: "Java" }],
  },
];

const ProyectosSection = () => {
  return (
    <section
      id="proyectos"
      style={{
        padding: "60px 8%",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SelectTittle texto="Proyectos Destacados" size={36} align="center" />

      <Row
        gutter={[24, 24]}
        justify="center"
        style={{
          width: "100%",
          marginTop: 40,
          maxWidth: 1400,
        }}
      >
        {proyectosFiltrados.map(({ id, titulo, descripcion, imagen, tecnologias }) => (
          <Col
            key={id}xs={24}sm={12}md={12} lg={8} xl={8} style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: 380 }}>
              <CardProyecto
                titulo={titulo}
                descripcion={descripcion}
                imagen={imagen}
                tecnologias={tecnologias}
              />
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProyectosSection;
