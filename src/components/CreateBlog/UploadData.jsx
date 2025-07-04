import { Navigate, useNavigate } from 'react-router-dom'
import uploadImage from './uploadImage'

export function UploadData({ image, text, showError, setIsUploading }) {
  const createdBlogs = JSON.parse(localStorage.getItem('createdBlogs')) || []
  const user = JSON.parse(sessionStorage.getItem('currentUser'))
  const navigate = useNavigate()
  const id = Date.now()
  async function upload() {
    setIsUploading(true)
    const data = {
      title: text.title,
      body: text.body,
      userid: user.id,
      id: id,
      image: await uploadImage(image)
    }
    if (data.title && data.body && data.userid && data.id && data.image) {
      localStorage.setItem('createdBlogs', JSON.stringify([...createdBlogs, data]))
      setIsUploading(false)
    } else {
      console.log('error')
      showError('Error uploading data')
      setIsUploading(false)
      return
    }
  }
  return (
    <div>
      <div className='group relative outline-none w-fit bg-orange-500 text-white px-4 py-2 rounded-2xl cursor-pointer mt-4' onClick={async () => {
        if (image && text && text?.title?.trim() && text?.body?.trim()) {
          await upload()
          navigate(`/blogs/${id}`)
        } else {
          showError('')
        }
      }}>Create Blog</div>
    </div>
  )
}

