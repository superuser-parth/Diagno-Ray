import React from 'react';
import './Disease.css'; // Import the CSS file for styling\
import caries from "./static/caries.jpg";
import lesions from "./static/lesions.png";
import canal from "./static/canal.jpg";
import necrosis from "./static/necrosis.webp";
import xray from "./placeholder.jpg";

function Disease() {
  return (
    <div className="disease">
      <div className="distitle" style={{ paddingTop: '20px', fontSize: '35px', color: 'white' }}>
        Common Dental Disorders
      </div>
      <div className="dis1">
       
        <p>
        <h3>Caries</h3>
          Dental caries is reported to be one of the oldest and most common diseases found in humans. Dental caries is
          a prevalent chronic infectious disease resulting from tooth-adherent cariogenic bacteria that metabolize sugars
          to produce acid, which over time demineralizes tooth structure. Causes include bacteria, snacking, sipping sugary
          drinks and poor teeth cleaning. There may be no symptoms. Untreated cavities can cause toothache, infection,
          and tooth loss. Treatments include fluoride, fillings, and crowns. Severe cases may need a root canal or
          removal.
        </p>
   
        <img src={caries} alt="Caries" />
      </div>

      <div className="dis2">
        
        <img src={lesions} alt="Lesions" />
        <p>
            <h3>Lesions</h3>
          These disorders include leukoplakia, erythroplakia, oral submucous fibrosis, actinic cheilitis, and OLP. 24.
          Early identification and treatment of these lesions are recommended to prevent the development of oral squamous
          cell carcinoma. Oral leukoplakia refers to white plaques of the oral mucosa with an unknown cause. Common
          superficial oral lesions include candidiasis, recurrent herpes labialis, recurrent aphthous stomatitis, erythema
          migrans, hairy tongue, and lichen planus. Recognition and diagnosis require taking a thorough history and
          performing a complete oral examination.
        </p>
       
        
      </div>

      <div className="dis3">
        
        <p>
        <h3>Root Canal</h3>
          Root canal therapy is necessary when oral bacteria invade the pulp inside of your tooth. This usually happens
          when a cavity is left untreated for a long time. It can also occur if your tooth becomes cracked or damaged
          due to trauma. Root canal treatment is a dental procedure that relieves pain caused by an infected or abscessed
          tooth. During the root canal process, the inflamed pulp is removed. The surfaces inside the tooth are then
          cleaned and disinfected, and a filling is placed to seal the space.
        </p>
        
        <img src={canal} alt="Root Canal" />
      </div>

      <div className="dis4">
        
        <img src={necrosis} alt="Necrosis" />
        <p>
        <h3>Necrosis</h3>
          These disorders include leukoplakia, erythroplakia, oral submucous fibrosis, actinic cheilitis, and OLP. 24.
          Early identification and treatment of these lesions are recommended to prevent the development of oral squamous
          cell carcinoma. Oral leukoplakia refers to white plaques of the oral mucosa with an unknown cause. Common
          superficial oral lesions include candidiasis, recurrent herpes labialis, recurrent aphthous stomatitis, erythema
          migrans, hairy tongue, and lichen planus. Recognition and diagnosis require taking a thorough history and
          performing a complete oral examination.
        </p>

       
      </div>
    </div>
  );
}

export default Disease;
