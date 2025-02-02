import cart from "../../../../assets/cart.png";
import { Welcome } from "./styles";

export const WelcomeCard = () => {
  return (
    <Welcome>
      <div>
        <h2>Good Job!</h2>
        <p>
          You have over 20,000 visitors in the
          <br /> last 10 days. Keep it up!
        </p>
      </div>
      <div>
        <img
          src={cart}
          alt="Shopping cart"
          style={{ maxWidth: "100px", zIndex: 1 }}
        />
      </div>
    </Welcome>
  );
};
