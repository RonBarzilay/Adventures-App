import { insertPlace } from "../util/database";
import PlaceForm from "./../components/Places/PlaceForm";

function AddPlace({ navigation }) {
  async function createPlacehandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onCreatePlace={createPlacehandler} />;
}

export default AddPlace;
