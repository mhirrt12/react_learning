// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "./context/ThemeContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

<Provider store={store}>
    <App />
</Provider>