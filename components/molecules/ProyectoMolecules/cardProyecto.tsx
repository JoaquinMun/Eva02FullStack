import ImagenPortada from "components/atoms/Anytings/selectImage";
import SelectParagraph from "components/atoms/Anytings/selectParagraph";
import TechLogo from "components/atoms/Anytings/selectTechLogo";
import SelectTittle from "components/atoms/Anytings/selectTittle";

type Props = {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: { src: string; name: string }[];
};
{/* chatgpt*/}
const cardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  borderRadius: 20,
  overflow: "hidden",
  background: "linear-gradient(180deg, rgba(53, 6, 129, 1) 0%, rgba(20,20,20,1) 100%)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  transition: "transform 0.35s ease, box-shadow 0.35s ease",
  cursor: "pointer",
};

const imagenContainerStyle: React.CSSProperties = {
  width: "100%",
  height: 220,
  overflow: "hidden",
};

const bodyStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: "22px 24px 28px",
  justifyContent: "space-between",
  flexGrow: 1,
};

const tecnologiasStyle: React.CSSProperties = {
  display: "flex",
  gap: 14,
  marginTop: 14,
  alignItems: "center",
};

const CardProyecto = ({ titulo, descripcion, imagen, tecnologias }: Props) => {
  return (
    <article
      style={cardStyle}
      className="card-proyecto"
    >
      <div style={imagenContainerStyle}>
        <ImagenPortada src={imagen} alt={titulo} height={220} />
      </div>

      <div style={bodyStyle}>
        <SelectTittle texto={titulo} size={20} align="left" />
        <SelectParagraph texto={descripcion} size={15} />
        <div style={tecnologiasStyle}>
          {tecnologias.map((tech, i) => (
            <TechLogo key={i} src={tech.src} name={tech.name} size={40} />
          ))}
        </div>
      </div>
          {/* CHATGPT*/}
      <style>
        {`
          .card-proyecto:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 16px 40px rgba(0,0,0,0.45);
            border: 1px solid rgba(255, 0, 0, 0.08);
          }

          .card-proyecto img {
            transition: transform 0.4s ease;
          }

          .card-proyecto:hover img {
            transform: scale(1.05);
          }
        `}
      </style>
    </article>
  );
};

export default CardProyecto;
