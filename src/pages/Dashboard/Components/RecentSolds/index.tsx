import { Recent } from "./styles";
import { FaGlasses, FaCartPlus } from "react-icons/fa";
import bag from "../../../../assets/bag.jpg";


export const RecentSold = () => {
    return (
        <Recent>
        <h3>Recent Sold</h3>
        <div className="items">
          <div className="item1">
            <img src={bag} alt="Bag" />
            <h4>Bang Bag</h4>
            <p>$1.5k earned</p>
          </div>
          <div className="item2">
            <div className="div1">
              <div className="img">
                <FaGlasses size={35} />
              </div>
              <div className="img">
                <FaCartPlus size={35} />
              </div>
            </div>

            <div className="div2">
              <h4>Dresses</h4>
              <p>
                <span>25 Items</span> <span>$3.5k earned</span>
              </p>
            </div>
          </div>
        </div>
      </Recent>
    )
}