import { useState, useRef, useEffect } from 'react'
import Editor from '@monaco-editor/react';
import '../../../App.css'

// YOUTUBE VIDEO : https://youtu.be/WiacAGLd9so

const files = {
  'TrackFormat.ajs' : {
    name: 'Track Event',
    language: 'javascript',
    value: 'analytics.track("Event Name",{properties}, {context}, [callback]) \n analytics.track("Product Viewed",{name:"sneakers"}, {integrations:{"Google Analytics": false}})'
  },
  'IdentifyFormat.ajs' : {
    name: 'Identify Event',
    language: 'javascript',
    value: 'analytics.identify("userId",{properties}, {context}, [callback])'
  },
  'pageFormat.ajs' : {
    name: 'Page Event',
    language: 'javascript',
    value: 'analytics.page("Page Name", "Page Category",{properties}, {context}, [callback])'
  },
  'groupFormat.ajs' : {
    name: 'Group Event',
    language: 'javascript',
    value: 'analytics.group("Event Name",{properties}, {context}, [callback])'
  },
  'aliasFormat.ajs' : {
    name: 'Alias Event',
    language: 'javascript',
    value: 'analytics.alias("Event Name",{properties}, {context}, [callback])'
  },
}




function CodeEditor() {
  // const [fileName, setFileName] = useState('TrackFormat.ajs')
  const [fileName, setFileName] = useState('TrackFormat.ajs')
  const editorRef = useRef(null);
  const file = files[fileName];
  // files['script.track.js'] => file => name, language, value => pass those to the editor


  useEffect(() => {
    handleEditorDidMount();
  })

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  
  function getEditorValue(editor) {
    // editorRef.current = editor;
    alert(editorRef.current.getValue());
  }

  return (
    <div className='codeEditor'>
      {/* <button onClick={(e) => setFileName(e.currentTarget.value)}> */}
      <div>
        <button onClick={() => setFileName('TrackFormat.ajs')}>
          TrackFormat.ajs  
        </button>
        {/* <button onClick={(e) => setFileName(e.currentTarget.value.toString)}> */}
        <button onClick={() => setFileName('IdentifyFormat.ajs')}>
          IdentifyFormat.ajs
        </button>
        <button onClick={() => getEditorValue()}>
          Get Editor Value
        </button>
      </div>

      <Editor 
        theme='vs-light'
        defaultLanguage={file.language}
        path={file.name}
        defaultValue={file.value}
        className='editor'
      />
    </div>
  )
}


export default CodeEditor;
