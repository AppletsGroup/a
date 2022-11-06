const VisibilityLabel = ({ isPublic }) => {
  return (
    <div className="w-fit rounded-2xl border px-2 py-1 text-sm text-slate-500">
      {isPublic ? 'Public' : 'Private'}
    </div>
  )
}

export default VisibilityLabel
