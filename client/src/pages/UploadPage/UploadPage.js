import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./UploadPage.css";

const UploadPage = () => {
  const [files, setFiles] = useState(undefined);

  const history = useHistory();

  const fetchImages = async () => {
    const res = await axios.get("/allFiles");
    console.log(res);
    setFiles(res.data.files);
  };

  const deleteFile = async (id) => {
    await axios.delete(`/files/${id}`);
  };

  const renderFiles = () => {
    if (files) {
      return files.map((file) => {
        return (
          <div className="upload-page__file-container">
            {file.isImage ? (
              <img
                className="upload-page__image"
                src={`image/${file.filename}`}
                alt=""
              />
            ) : (
              <p className="upload-page__non-image">{file.filename}</p>
            )}
            <form onSubmit={() => deleteFile(file._id)}>
              <input type="submit" name="delete" value="Delete" />
            </form>
          </div>
        );
      });
    } else {
      return <p>No files to show</p>;
    }
  };

  const submit = async () => {
    history.push("/");
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="upload-page">
      <form
        className="upload-page__form"
        action="/upload"
        method="POST"
        enctype="multipart/form-data"
        onSubmit={submit}
      >
        <label for="file">Choose File</label>
        <input type="file" name="file" id="file" />
        <input type="submit" value="Submit" />
      </form>
      <hr />
      {renderFiles()}
    </div>
  );
};

export default UploadPage;
