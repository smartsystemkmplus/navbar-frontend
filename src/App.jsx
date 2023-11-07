import NiceModal from "@ebay/nice-modal-react";
import { MantineProvider } from "@mantine/core";
import dayjs from "dayjs";
import "dayjs/locale/id";
import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MobileBanner from "./Components/Misc/MobileBanner";
import ModalPortal from "./Components/Modals/ModalPortal";
import NewNavbar from "./Components/Navigation/NewNavbar/NewNavbar";
import { myCache, theme } from "./Configs/Mantine";
import queryClient from "./Configs/ReactQuery";
import { persistedStore, store } from "./Configs/Redux/store";
import "./Configs/Yup";

dayjs.locale("id");

function App({
  platform, // null || "LMS" || "KMS" || "TMS". null value will remove the platform menu button
}) {
  return (
    <div className="sticky top-0 z-50">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <MantineProvider emotionCache={myCache} theme={theme}>
            <QueryClientProvider client={queryClient}>
              <NiceModal.Provider>
                <MobileBanner />
                <ModalPortal />
                <NewNavbar platform={platform} />
              </NiceModal.Provider>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
