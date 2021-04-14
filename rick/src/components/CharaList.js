import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchData } from "../store";

const CharaList = (props) => {
  const { characters, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div>
      <h1>RICK & MORTY CHARACTER LIST</h1>
      <div className="characters">
        {isLoading ? <h3>loading data....</h3> : null}
        {error ? <h3>houston , we have a problem....</h3> : null}
        {characters.map((person) => (
          <div key={person.id}>
            <h1>
              {" "}
              {person.name}--- {person.origin.name}
            </h1>

            <img src={person.image} alt="" />
            {"  "}
          </div>
        ))}
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
