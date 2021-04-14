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
              <CardTitle tag="h2"> {person.name}</CardTitle>
              <CardImg src={person.image} alt="" />
              <CardSubtitle tag="h3">{person.origin.name}</CardSubtitle>
              <CardText tag="h4" className="mb-2 text-muted">
                {person.status}
              </CardText>
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
