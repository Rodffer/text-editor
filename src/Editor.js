import React, { useState } from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Container } from './styles/stylesEditor';

function Editor() {
  const [data, setData] = useState('');
  const [formatedData, setFormatedData] = useState([]);

  const handleInput = (event, editor) => {
    setData(editor.getData());
  };

  const handleSubmit = (event, editor) => {
    event.preventDefault();

    const test = data.replace(/<[^>]*>?/gm, '');

    console.log(test);

    setFormatedData([...formatedData, test]);
    console.log(formatedData);
    setData('');
  };

  return (
    <>
      <BrowserRouter basename="text-editor" />
      <GlobalStyle />
      <Container>
        <h1>
          <AiOutlineFileText />
          Text Editor
        </h1>
        <form onSubmit={handleSubmit}>
          <CKEditor
            editor={ClassicEditor}
            config={{ placeholder: 'Digite algo aqui...' }}
            onInit={(editor) => {
              console.log('O editor esta pronto para uso!', editor);
            }}
            onChange={handleInput}
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </Container>
      {formatedData.map((d) => {
        return <Container>{d}</Container>;
      })}
    </>
  );
}

export default Editor;
