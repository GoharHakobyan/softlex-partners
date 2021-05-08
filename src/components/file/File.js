import React, { useRef, useState } from 'react';
import styles from './file.module.scss';
import Cross from '../../../static/img/cross.svg';

const File = ({ name, value, onChange, form, setForm }) => {
  const [files, setFile] = useState([]);
  const hiddenFileInput = useRef(null);

  function handleUpload(event) {
    event.preventDefault();
    hiddenFileInput.current.click();
  }
  // добавить проверку для уникального имени
  function handleChange(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const dotIndex = file.name.lastIndexOf('.');
      const ext = file.name.slice(dotIndex);
      let fileName = file.name.slice(0, dotIndex);
      fileName = fileName.length > 15 ? fileName.slice(0, 15) + '..' : fileName;
      if(files) {
       setFile([
        ...files,
        {
          file,
          ext,
          fileName,
          id: new Date().getTime(),
        }])
      }else {
        setFile([
          {
          file,
          ext,
          fileName,
          id: new Date().getTime(),
        }
        ])
      }
      
      if(form[`files[]`]) {
        setForm({
      ...form,
      [`files[]`]: [...form[`files[]`], file],
  })
      }else {
        setForm({
      ...form,
      [`files[]`]: [file],
  })
}
console.log(files, form[`files[]`])
    }

    hiddenFileInput.current.value = '';
  }

  function handleDelete(selectedFile) {
    setFile([...files.filter(file => file.id !== selectedFile.id)]);
    setForm({...form,  
      [`files[]`] : [...form[`files[]`]].filter(file => file.name.slice(0, file.name.lastIndexOf('.')) !== selectedFile.name)});
  }
  
  return (
    <div className={styles.flex}>
      <button className={styles.button} onClick={handleUpload}>
        Прикрепить файлы
      </button>
      {files.length > 0 && (
        <ul className={styles.list}>
          {files.map((file, index) => (
            <li className={styles.list__item} key={index}>
              <span>
                {file.fileName}
                <span className={styles.ext}>{file.ext}</span>
              </span>
              <Cross
                className={styles.cross}
                onClick={() => handleDelete(file)}
              />
            </li>
          ))}
        </ul>
      )}
      <input
        name={name}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
        ref={hiddenFileInput}
        value={value}
        multiple
      ></input>
    </div>
  );
};

export default File;
