import { useUploadMutation } from "lib/graphql";
import { useState } from "react";

export const useUpload = () => {
  const [uploadMutation] = useUploadMutation();
  const [loading, setLoading] = useState(false);

  const upload = async (file: File) => {
    setLoading(true);
    try {
      const { data } = await uploadMutation({
        variables: {
          fileType: file.type
        }
      });

      const url = data?.upload.uploadUrl as string;
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file
      });
      return data;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading };
};
