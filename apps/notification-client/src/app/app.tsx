
import { Notification } from "./components/notification";

import { AppWrapper } from "./components/style";

export function App() {
  return (
    <AppWrapper>
      <Notification userId="1" user_role={['RPROJECTA_ROLE_1']} />


    </AppWrapper>
  );
}

export default App;
