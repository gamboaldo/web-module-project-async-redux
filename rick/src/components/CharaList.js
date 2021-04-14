import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchData } from "../store";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CharaList = (props) => {
  const { characters, isLoading, error } = useSelector((state) => state);
  const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>RICK & MORTY CHARACTER LIST</h1>
      <div className="characters">
        {isLoading ? <h3>loading data....</h3> : null}
        {error ? <h3>houston , we have a problem....</h3> : null}
        <Card className="card-list">
          {characters.map((person) => (
            <div key={person.id} className="card">
              <Card className="card2">
                <h1> {person.name}</h1>
                <img width="80%" src={person.image} alt="" />
                <h2>{person.origin.name}</h2>
                <h2>{person.species}</h2>
                <h2>{person.gender}</h2>
                <h2>{person.status}</h2>
                <h2>{person.location.name}</h2>
              </Card>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.isLoading,
//     characters: state.characters,
//     error: state.error,
//   };
// };
export default connect(null, { fetchData })(CharaList);
