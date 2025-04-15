import React from "react";
import Image from "next/image";

const Shinchan = () => {
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden", textAlign: "center" }}>
      <Image
        src="/sinchan.png"
        alt="Shinchan"
        width={400}
        height={400}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain"
        }}
      />
    </div>
  );
};

export default Shinchan;
