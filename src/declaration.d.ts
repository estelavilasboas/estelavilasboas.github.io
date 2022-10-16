// // Place here global interface and variable that should be available globally
declare module 'react-masked-text';

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export default value;
}

declare const PUBLIC_URL: string;
