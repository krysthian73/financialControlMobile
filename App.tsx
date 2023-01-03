import InitialPage from "./pages/initialPage";
import Header from "./components/header/header";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <Header text="Controle financeiro" />
        <InitialPage />
      </ScrollView>
    </SafeAreaView>
  );
}
