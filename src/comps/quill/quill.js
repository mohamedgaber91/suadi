// import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function quill(props) {
  //   const [value, setValue] = useState('');
  const { value, onChange,name } = props

  const modules = {
    toolbar:[
      [{ "header": [] }],
      [{ 'align': [] }],
      [{ "color": [] }],
      [{ "background": [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
       ["bold", "underline","italic",],
    ]
  }

  return <ReactQuill modules={modules} name = {name} theme="snow" value={value} onChange={onChange} />;
}