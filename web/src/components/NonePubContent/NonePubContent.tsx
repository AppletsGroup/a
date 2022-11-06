import {
  useEditor,
  defaultPreset,
  EditorProvider,
  EditorContent,
} from 'nonepub'

const NonePubContent = ({ story }) => {
  const options = defaultPreset(
    {
      type: 'html',
      value: story.content || '',
    },
    {
      uploader: (file) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const uri = URL.createObjectURL(file)
            console.log('upload uri', uri)
            resolve({
              src: uri,
            })
          }, 1000)
        })
      },
      readonly: true,
    }
  )
  const editor = useEditor(options)

  return (
    <EditorProvider editor={editor}>
      <EditorContent />
    </EditorProvider>
  )
}

export default NonePubContent
