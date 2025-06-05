import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    [key: string]: string;
  }
}
