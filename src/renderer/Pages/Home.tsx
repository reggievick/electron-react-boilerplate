import { Link } from "react-router-dom";
import icon from '../../../assets/icon.svg';

export const Home = () => {
    return (
      <div>
        <div className="Hello">
          <img width="200px" alt="icon" src={icon} />
        </div>
        <h1>Actuarial Analysis Toolkit</h1>
        <div className="Hello">
          <Link to='/compare'>
            <button type="button">                
                <span role="img" aria-label="Compare">
                
                </span>
                Compare
            </button>
          </Link>
        </div>
      </div>
    );
  };