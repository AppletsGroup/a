import { EditorProvider, EditorContent, HelpButton } from 'nonepub'

export default function NonePubEditor({ editor }) {
  return (
    <EditorProvider editor={editor}>
      <EditorContent />
      <HelpButton />
    </EditorProvider>
  )
}
