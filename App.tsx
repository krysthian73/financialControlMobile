import InitialPage from "./pages/initialPage";
import Header from "./components/header/header";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView>
        <Header text="Controle financeiro" />
        <InitialPage />
      </ScrollView>
    </SafeAreaView>
  );
}
