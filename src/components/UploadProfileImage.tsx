import { useState, useRef } from "react"
import { Camera, LoaderIcon } from "lucide-react"
import toast from "react-hot-toast"
import useAuth from "../hooks/useAuth"
import { uploadProfileImage } from "../service/auth"

const UploadProfileImage = () => {
  const { user, setUser } = useAuth()
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (!selected) return

    if (!["image/jpeg", "image/png", "image/webp"].includes(selected.type)) {
      toast.error("Only JPG, PNG or WEBP images are allowed !")
      e.target.value = ""
      return
    }
    if (selected.size > 2 * 1024 * 1024) {
      toast.error("Image must be under 2MB !")
      e.target.value = ""
      return
    }

    setFile(selected)
    setPreview(URL.createObjectURL(selected))  
  }

  const handleUpload = async () => {
    if (!file) return
    setUploading(true)
    try {
      const res = await uploadProfileImage(file)
      setUser({ ...user, profileImage: res.data.profileImage })  
      toast.success("Profile picture updated !")
      setFile(null)
      setPreview(null)
      if (inputRef.current) inputRef.current.value = ""
    } catch (error) {
      console.error(error)
      toast.error("Upload failed !")
    } finally {
      setUploading(false)
    }
  }

  const current = preview ?? user?.profileImage

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative h-28 w-28 overflow-hidden rounded-full"
      >
        {current ? (
          <img src={current} alt="Profile" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-400 text-3xl font-semibold text-white">
            {user?.fullName?.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <Camera className="text-white" />
        </div>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={handleChange}
        className="hidden"
      />

      {file && (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleUpload}
            disabled={uploading}
            className="btn btn-sm rounded-full bg-black text-white"
          >
            {uploading && <LoaderIcon className="animate-spin size-4" />}
            {uploading ? "Uploading..." : "Save"}
          </button>
          <button
            type="button"
            disabled={uploading}
            onClick={() => { setFile(null); setPreview(null) }}
            className="btn btn-sm rounded-full"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default UploadProfileImage