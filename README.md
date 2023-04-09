Look in Blam mode for read me

How to run:
1. clone the repo and run (npm install) so all the modules.                                                                                                               
2. run the json server: npx json-server --watch data/db.json --port 8000 .
3. using new terminal run the react server: npm start


project explaination:

1. Created folders pages for components, sidebar for navigation, data for json data.
2. Created 4 routing paths and added for navigation(sidebar).
3. Created 4 components which reflects according to the routes and sidebar.
4. According to the ask developed each component Ui used files(js,css files).
5. using axios module connected to json server to add, update, delete data.
6. added tables for all scenarios and vehicles for particular scenario.
7. created new child component(Grid component) for home component and called inside the grid component.
8. added motion using animation and keyfreames css properties.
9. limited the data so that will not overload in tables.
10. Added functionalities for all buttons, icons, as per the requirements by using (useState, useEffect) hooks.
