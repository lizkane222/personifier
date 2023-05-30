import { useState, useRef, useEffect } from 'react'
import Editor, {useMonaco, setTheme} from '@monaco-editor/react';
import '../../../../App.css'

// YOUTUBE VIDEO : https://youtu.be/WiacAGLd9so
// OPTIONS : https://microsoft.github.io/monaco-editor/typedoc/interfaces/editor.IStandaloneEditorConstructionOptions.html#wordWrap

const files = {
  'track.ajs' : {
    name: 'Track Event',
    language: 'javascript',
    value: 'analytics.track("Event Name",{properties}, {context}, [callback]) \nanalytics.track("Product Viewed",{name:"sneakers"}, {integrations:{"Google Analytics": false}})'
  },
  'identify.ajs' : {
    name: 'Identify Event',
    language: 'javascript',
    value: 'analytics.identify("userId",{properties}, {context}, [callback])'
  },
  'page.ajs' : {
    name: 'Page Event',
    language: 'javascript',
    value: 'analytics.page("Page Name", "Page Category",{properties}, {context}, [callback])'
  },
  'screen.ajs' : {
    name: 'Screen Event',
    language: 'javascript',
    value: 'analytics.page("Page Name", "Page Category",{properties}, {context}, [callback])'
  },
  'group.ajs' : {
    name: 'Group Event',
    language: 'javascript',
    value: 'analytics.group("Group ID",{group-properties}, {context}, [callback])'
  },
  'alias.ajs' : {
    name: 'Alias Event',
    language: 'javascript',
    value: 'analytics.alias("Event Name",{properties}, {context}, [callback])'
  },
}

const convertAjsToJson = () => {

}


function CodeEditor() {
  // const [fileName, setFileName] = useState('TrackFormat.ajs')
  const [fileName, setFileName] = useState('track.ajs')
  const editorRef = useRef(null);
  const file = files[fileName];
  const monaco = useMonaco();
  const minimap = {'enabled':'false'}
  // files['script.track.js'] => file => name, language, value => pass those to the editor

  // function handleEditorDidMount(editor, monaco) {
  //   editorRef.current = editor;
  // }
  
  function getEditorValue(editor) {
    // editorRef.current = editor;
    alert(editorRef.current.getValue());
  }

  const lightMode = 'vs-light'
  const darkMode = 'vs-dark'
  const editorTheme = useRef(darkMode)

  useEffect(() => {
    monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true)
    if(monaco){
      console.log('here is the monaco instance:', monaco)
    }
  }, [monaco]);


  const options= {
    'extraEditorClassName':'editor ',
    'wordBreak':'on',
    'wordWrap':'on',
    'autoClosingBrackets':'always',
    'autoClosingQuotes':'always',
    'autoIndent':'none',
    'padding':'-5px',
    'useShadowDOM':'true',
    'snippetSuggestions':'true',
    'smartSelect':'true',
    'selectionClipboard':'true',
    'selectOnLineNumbers':'true',
    'codeLens':'true',
    'bracketPairColorization':'true',
    'trimAutoWhitespace':'true',
    'contextmenu':'true',
    'copyWithSyntaxHighlighting':'true',
    'comments':'true',
    'definitionLinkOpensInPeek':'true',
    'detectIndentation':'true',
    // 'dimension':'height:50 width:50',
    'dragAndDrop':'true',
    'dropIntoEditor':'true',
    'experimentalWhitespaceRendering':'off',
    'find':'autoFindInSelection:multiline',
    'addExtraSpaceOnTop':'true',
    'fixedOverflowWidgets':'true',
    'formatOnPaste':'true',
    'formatOnType':'true',
    'guides':'true',
    'lineNumbersMinChars':'2',
    'roundedSelection':'true',
    'scrollBeyondLastLine':'false',
    'scrollbar':'alwaysConsumeMouseWheel:true',
    'tabSize':'3',
    'padding':'top: 5',
    'minimap':{'enabled':'false'},
    // 'disableLayerHinting':'true',
    // 'theme':{editorTheme},
    // 'fontFamily':'',
    // 'fontSize':'',
    // 'fontVariations':'',
    // 'fontWeight':'',
    'glyphMargin':'true',
  }

  return (
    <div className='codeEditor relative rounded-lg w-full h-80 my-2 mx-3 relative'>
      <div className='absolute inset-y-0 inset-x-0'>
          {/* <div className='w-28 m-1 rounded-lg border-segment-green border-2 tx-md cursor-pointer' onClick={() => handleTheme(!editorTheme)}>mode</div> */}
          <div className='w-10 m-1 rounded-lg border-segment-green border-2 tx-sm cursor-pointer' onClick={() => setFileName('track.ajs')}>track</div>
          <div className='w-10 m-1 rounded-lg border-segment-green border-2 tx-sm cursor-pointer' onClick={() => setFileName('page.ajs')}>page</div>
          <div className='w-10 m-1 rounded-lg border-segment-green border-2 tx-sm cursor-pointer' onClick={() => setFileName('identify.ajs')}>identify</div>
          <div className='w-10 m-1 rounded-lg border-segment-green border-2 tx-sm cursor-pointer' onClick={() => setFileName('screen.ajs')}>screen</div>
          <div className='w-10 m-1 rounded-lg border-segment-green border-2 tx-sm cursor-pointer' onClick={() => setFileName('group.ajs')}>group</div>
          <div className='w-10 m-1 rounded-lg border-segment-green border-2 tx-sm cursor-pointer' onClick={() => setFileName('alias.ajs')}>alias</div>
          <div className='w-10 m-1 rounded-lg border-segment-green border-2 tx-sm cursor-pointer' onClick={() => getEditorValue()}>copy</div>
      </div>

      <Editor 
        theme={lightMode}
        defaultLanguage={file.language}
        path={file.name}
        // onMount={handleEditorDidMount}
        defaultValue={file.value}
        className='editor'
        options={options}
        minimap={minimap}
      />
    </div>
  )
}


export default CodeEditor;
