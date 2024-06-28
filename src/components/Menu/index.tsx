import { Tab, Tabs } from "@material-ui/core"
import { Header } from "../Header"
import { useState } from "react";
import { MenuDrinks } from "../Drinks/MenuDrinks";
import { MenuPizzas } from "../Pizzas/MenuPizzas";

export const Menu = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setSelectedTab(newValue);
    };
  
    const renderContent = () => {
      switch (selectedTab) {
        case 0:
          return <MenuPizzas />;
        case 1:
          return <MenuDrinks />;
        default:
          return null;
      }
    };
  

    return (
        <div>
          <Header />
          <Tabs variant="fullWidth" value={selectedTab} onChange={handleChange}>
            <Tab label="Pizzas" />
            <Tab label="Bebidas" />
          </Tabs>
          <div>
            {renderContent()}
          </div>
        </div>
      );
}