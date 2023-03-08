import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Editor from "./Editor"
import EditorTest from "./EditorTest"
import "./style.css"
import App from './App.tsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Editor /> */}
    <EditorTest />
  </StrictMode>
);