import React from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import GlobalStyle from './styles/global';
import { Container } from './styles/stylesEditor';

function Editor() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>
          <AiOutlineFileText />
          Text Editor
        </h1>
        <CKEditor editor={ClassicEditor} />
      </Container>
    </>
  );
}

export default Editor;
