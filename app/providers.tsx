"use client";

import store from "../redux/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
     <Provider store={store} >
        {children}
     </Provider>
    </ThemeProvider>
  );
}
