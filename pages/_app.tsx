console.log(
  "Oh wow look at you, you little hacker! Inspecting elements and stuff... very impressive wow!"
);

import React from "react";
import '../public/globals.css'

function Application({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}

export default Application;
