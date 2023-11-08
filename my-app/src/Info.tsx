import React from "react";

const Info: React.FC<any> = () => {
  return (
    <div>
      <h1>Amdahlin laista</h1>
      <p>
        Amdahlin lailla pystytään arvioida teoreettisen nopeuskertoimen
        rinnakkaistamalla ohjelma. Laki ottaa huomioon prosessorien määrän (p)
        sekä rinnasttavan osuuden määrä (s).
      </p>
      <p>
        Ambdalin lain kaava: S(p,s) = 1 / ((1-p) + p / s)
      </p>
    </div>
  );
};

export default Info;
