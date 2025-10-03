import { IonPage } from "@ionic/react";
import "./Home.css";
import MessageCard from "../components/MessageCard";
import Profile from "../components/Profile";
import Product from "../components/Product";
import l from "../images/l.png";
import k from "../images/k.png";
import j from "../images/j.png";
import g from "../images/g.png";
import s from "../images/s.png";
import p from "../images/p.png";

const Home: React.FC = () => {
  return (
    <IonPage>
      <div className="upper-div">
        <p className="title">Bootstrap Props</p>
        <p className="subtitle">By Jarell Tamonte</p>
        <div className="card-distribution">
          <div className="profile-card">
            <Profile
              image={j}
              name="John Smith"
              age={32}
              bio="A software engineer from CA. He loves building mobile apps."
            />
            <Profile
              image={k}
              name="Emily Johnson"
              age={29}
              bio="A graphic designer from TX. She enjoys creating beautiful UIs."
            />
            <Profile
              image={l}
              name="Sarah Williams"
              age={35}
              bio="A project manager from FL. She is passionate about agile methodologies."
            />
          </div>
          <div className="message-card">
            <MessageCard
              title="Welcome"
              message="This is a Bootstrap alert integrated into an Ionic React app!"
              type="success"
            />
          </div>
          <div className="message-card">
            <MessageCard
              title="Danger"
              message="This is a Bootstrap alert integrated into an Ionic React app!"
              type="danger"
            />
          </div>
          <div className="message-card">
            <MessageCard
              title="Warning"
              message="This is a Bootstrap alert integrated into an Ionic React app!"
              type="warning"
            />
          </div>

          <div className="product-card">
            <Product
            image={g}
              productName="Google Pixel 10 Pro XL"
              price={1099}
              description="This is a super cool product that you will love!"
            />
            <Product
            image={p}
              productName="iPhone 17 Pro Max"
              price={1099}
              description="This is another great product that you must have!"
            />
            <Product
            image={s}
              productName="Samsung Galaxy S25 Ultra"
              price={1099}
              description="This is a must-have item for everyone!"
            />
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
