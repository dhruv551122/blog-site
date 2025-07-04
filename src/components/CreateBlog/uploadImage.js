export default async function uploadImage(image) {
    const url = import.meta.env.VITE_CLOUDINARY_URL
    const preset = import.meta.env.VITE_CLOUDINARY_PRESET

    const formData = new FormData()

    formData.append('file', image)
    formData.append('upload_preset', preset)

    const imageUrl = await fetch(url,
        {
            method: 'POST',
            body: formData
        }
    )
        .then(res => res.json())
        .then(res => { return res.secure_url })
        .catch(e => console.log('Error uploading image', e))
    return imageUrl
}