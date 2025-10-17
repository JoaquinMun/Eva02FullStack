import React from "react";

type Skill = {
  name: string;
  image?: string; // opcional
};

type Props = {
  title?: string;
  text?: string;
  skills?: Skill[]; // tipamos el arreglo (chatgpt)
};

const SectionText: React.FC<Props> = ({ title = "Título", text = "", skills = [] }) => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#030712",
        padding: "20px",
        borderRadius: "8px",
        margin: "20px 0",
        color: "#ccc",
        flex: 1,
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          marginBottom: "10px",
          fontWeight: "500",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>

      {skills.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#111827",
                padding: "6px 10px",
                borderRadius: "6px",
              }}
            >
              {skill.image && (
                <img
                  src={skill.image}
                  alt={skill.name}
                  style={{
                    width: "28px",
                    height: "28px",
                    objectFit: "contain",
                  }}
                />
              )}
              <span style={{ fontSize: "14px" }}>{skill.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap",
            textAlign: "left",
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default SectionText;