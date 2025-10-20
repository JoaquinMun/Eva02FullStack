import { Row, Col } from "antd";
import SelectTittle from "components/atoms/Anytings/selectTittle";
import iconc from "/assets/ICONC.png";
import sql from "/assets/sqlLogo.png";
import ddd from "/assets/logoprusa.png";
import auto from "/assets/autorobot.gif";
import proyectosql from "/assets/sqlproyectop.gif";
import proyectoimpresora from "/assets/3dimpresora.gif";
import CardProyecto from "components/molecules/ProyectoMolecules/cardProyecto";

const proyectosFiltrados = [
  {
    id: 1,
    titulo: "AutoTemp – Robot Autónomo (C++)",
    descripcion: `Desarrollamos un robot con sensores de color, humedad y temperatura. 
    Cuando detectaba blanco, las ruedas se activaban, y al detectar negro se detenían. 
    Este proyecto se enfocó en ofrecer soluciones automatizadas para huertas y datacenters.`,
    imagen: auto,
    tecnologias: [{ src: iconc, name: "C++" }],
  },
  {
    id: 2,
    titulo: "Base de Datos – Perfumería (SQL)",
    descripcion: `Diseñamos y normalizamos una base de datos relacional para una perfumería local 
    que buscaba expandirse. Migramos la información desde Excel a SQL, optimizando la gestión 
    de productos, clientes y ventas.`,
    imagen: proyectosql,
    tecnologias: [{ src: sql, name: "SQL" }],
  },
  {
    id: 3,
    titulo: "Maqueta Universidad Mayor (Impresión 3D)",
    descripcion: `En colaboración con la Universidad Mayor, realizamos una maqueta del sector con 
mayor densidad de antenas de Chile. Diseñamos e imprimimos más de 100 antenas en 3D, aplicando 
precisión y planificación de producción.`,
    imagen: proyectoimpresora,
    tecnologias: [{ src: ddd, name: "Impresión 3D" }],
  },
];

const ProyectosSection = () => {
  return (
    <section
      id="proyectos"
      style={{
        padding: "60px 8%",
        backgroundColor: "#0b0f19",
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
            key={id}xs={24}sm={12}md={12}lg={8}xl={8}style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 380,
              }}
            >
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
