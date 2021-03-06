import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";
const LoadingComponent = (loading) => (
    loading && <Dimmer active>
    <Loader size="huge" content={"Loading..."} />
  </Dimmer>
);
export default LoadingComponent;
