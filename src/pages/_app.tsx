import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { CartProvider } from "~/context";
import { UIProvider } from "~/context/ui";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <UIProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </UIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
