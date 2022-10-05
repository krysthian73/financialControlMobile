import InitialPage from "./pages/initialPage";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <InitialPage />
    </SafeAreaView>
  );
}
