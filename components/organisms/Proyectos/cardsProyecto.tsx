import { Card } from "antd";
import SelectTittle from "components/atoms/Anytings/selectTittle";
import iconc from "/assets/ICONC.png";
import auto from "/assets/autoRobot.png";
import CardProyecto from "components/molecules/ProyectoMolecules/cardProyecto";

const ProyectosSection = () => {
  return (
    <section id="proyectos">
      <SelectTittle texto="Proyectos Destacados" size={36} align={"center"}/>
      
      <div className="contenedor-proyectos">

      <CardProyecto
        titulo="INSERTAR PROYECTO 4TO"
        descripcion="INSERTAR PROYECTO 4TO"
        
        imagen={auto}
        tecnologias={[
          { src: iconc, name: "Java" },
          
        ]}
      />
      <CardProyecto
        titulo="INSERTAR PROYECTO 4TO"
        descripcion="INSERTAR PROYECTO 4TO"
        
        imagen={auto}
        tecnologias={[
          { src: iconc, name: "Java" },
          
        ]}
      />
      <CardProyecto
        titulo="INSERTAR PROYECTO 4TO"
        descripcion="INSERTAR PROYECTO 4TO"
        
        imagen={auto}
        tecnologias={[
          { src: iconc, name: "Java" },
          
        ]}
      />
    </div>
    </section>
  );
};

export default ProyectosSection;