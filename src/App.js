import React from 'react'
import { Editor, EditorState, ContentState } from 'draft-js'
import 'draft-js/dist/Draft.css'

function App() {
  const [editorState, setEditorState] = React.useState(
    () => {
      const content = ContentState.createFromText('Enter your password: ')
      const state = EditorState.createWithContent(content)
      return EditorState.moveFocusToEnd(state)
    }
  )

  const editor = React.useRef(null)
  React.useEffect(() => editor.current.focus(), [])

  return (
    <div style={{ height: '100vh' }}>
      <Editor ref={editor} editorState={editorState} onChange={setEditorState} />
    </div>
  )
}

export default App
