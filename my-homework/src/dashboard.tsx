import "./dashboard.css";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
    const navigate = useNavigate();
    const handelOnclick=()=>{
        
        navigate('/');
    }

  return (
    <div>
      <h2 className="title">Gatéories des servises disponibles</h2> 
      <div className="container">
        <div className="child">
          <br />
          <h3>Développement Web et Mobile</h3>
          <p>
            Le développement web est un domaine vaste qui englobe la création et la maintenance de sites web et d'applications web. Il peut être divisé en trois grandes catégories : le développement front-end, le développement back-end, et le développement full-stack.
          </p>
          <p>1. Développement Front-End</p>
          <p>2. Développement Back-End</p>
          <p>3. Développement Full-Stack</p>
        </div>

        <div className="child">
          <h3>Implémentation de solutions pour sites Web et applications mobiles</h3>
          <p>
            L'implémentation de solutions pour sites web et applications mobiles consiste à transformer des idées ou des concepts en produits fonctionnels accessibles via des navigateurs web ou des appareils mobiles. Cela implique plusieurs étapes et des technologies spécifiques pour garantir que le produit final répond aux besoins des utilisateurs et aux exigences techniques.
          </p>
        </div>

        <div className="child">
          <h3>Référencement (SEO) et hébergement</h3>
          <p>
            Le référencement (SEO) et l'hébergement sont deux éléments clés pour garantir qu'un site web est non seulement accessible en ligne, mais aussi visible et bien positionné dans les résultats des moteurs de recherche.
          </p>
        </div>

        <div className="child">
          <h3>Conception graphique</h3>
          <p>
            La conception graphique est une discipline créative qui combine l'art et la technologie pour communiquer des idées visuellement. Elle joue un rôle essentiel dans de nombreux domaines, y compris le marketing, la publicité, le design web, l'identité visuelle, et bien plus encore.
          </p>
        </div>
      </div>
      <br/>
      <div className="button">
      <button onClick={handelOnclick}>Log Out</button>
      </div>
    </div>
  );
}
