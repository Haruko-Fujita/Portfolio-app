const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]!;
  const filename = encodeURIComponent(file.name);
  const fileType = encodeURIComponent(file.type);

  const res = await fetch(
    `/api/uploadUrl?file=${filename}&fileType=${fileType}`
  );

  const { url, fields } = await res.json();
  const formData = new FormData();

  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    formData.append(key, value as string);
  });
  const upload = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (upload.ok) {
    console.log("Uploaded successfully!");
  } else {
    console.error("Upload failed.");
  }
};

export default function Upload() {
  return (
    <>
      <p>
        画像の追加（".png" or ".jpg" MAX 1MB）
        <input
          onChange={uploadPhoto}
          type="file"
          accept="image/png, image/jpeg"
        />
      </p>
    </>
  );
}
