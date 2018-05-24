import { DrawerNavigation } from "react-navigation";

import BancoSangreScreen from "./screens/BancoSangreScreen";
import ContactoScreen from "./screens/ContactoScreen";
import HomeScreen from "./screens/HomeScreen";

export default DrawerNavigator(
  {
    Page1: {
      screen: BancoSangreScreen
    },
    Page2: {
      screen: ContactoScreen
    },
    Page3: {
      screen: HomeScreen
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300
  }
);
