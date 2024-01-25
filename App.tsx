import Login from "./src/screens/Login";
import { Provider as PaperProvider } from "react-native-paper";
import Terms from "./src/screens/Terms";
import StarshipFeed from "./src/screens/StarshipFeed";

export default function App() {
  return (
    <PaperProvider>
      {/* <Login /> */}
      {/* <Terms /> */}
      <StarshipFeed />
    </PaperProvider>
  );
}