import React, { useState, useRef, memo } from 'react';
import Cross from '../../../../static/img/cross.svg';
import styles from '../../../styles/pages/index.module.scss';
import Input from '../../input';
import Select from '../../select';
import axios from 'axios';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
function Form({ sectionsRef, formData, url }) {
  const [isSend, setIsSend] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [files, setFile] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason_request: formData[3].items[0],
    description_request: '',
    [`files[]`]: '',
  });
  const hiddenFileInput = useRef(null);

  let fd = new FormData();

  function handleSubmit(event) {
    setIsSubmit(true);

    event.preventDefault();
    fd.append('name', form.name);
    fd.append('email', form.email);
    fd.append('phone', form.phone);
    fd.append('reason_request', form.reason_request);
    fd.append('description_request', form.description_request);
    fd.append('url', 'https://partners.softlex.pro/');
    for (const file of form[`files[]`]) {
      fd.append('files[]', file, file.name);
    }
    axios
      .post(`${url}/api/storeForm`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(result => setIsSend(true));
  }

  function handleTextfield(event) {
    setIsSubmit(false);
    setIsSend(false);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSelectfield(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

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
      let fullFileName = file.name;
      let fileName = file.name.slice(0, dotIndex);
      fileName = fileName.length > 15 ? fileName.slice(0, 15) + '..' : fileName;
      setFile([
        ...files,
        {
          file,
          ext,
          fileName,
          fullFileName,
          id: new Date().getTime(),
        },
      ]);
      setForm({
        ...form,
        [`files[]`]: [...form[`files[]`], file],
      });
    }

    hiddenFileInput.current.value = '';
  }
  // добавить проверку для уникального имени

  function handleDelete(selectedFile) {
    setFile([...files.filter(file => file.id !== selectedFile.id)]);
    setForm({
      ...form,
      [`files[]`]: [...form[`files[]`]].filter(
        file => file.name.toString() !== `${selectedFile.fullFileName}`
      ),
    });
  }
  return (
    <section className={styles.form} ref={el => (sectionsRef.current[5] = el)}>
      <h1 className={styles.form__title}>
        Заполните заявку и мы свяжемся с вами
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form__formContainer}>
          <div className={styles.form__fields}>
            <h3 className={styles.form__subtitle}>Контактные данные</h3>
            <Input
              {...formData[0]}
              onChange={handleTextfield}
              value={form.name}
              isValid={isSubmit && !form.name.length}
            />
            <div className={styles.form__inputFlex}>
              <Input
                {...formData[1]}
                onChange={handleTextfield}
                value={form.email}
                isValid={isSubmit && !form.email.length}
              />
              <Input
                {...formData[2]}
                onChange={handleTextfield}
                value={form.phone}
                isValid={isSubmit && !form.phone.length}
              />
            </div>
            <Select
              {...formData[3]}
              onChange={handleSelectfield}
              value={form.reason_request}
            />
          </div>
          <div className={styles.form__files}>
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
                name="files[]"
                type="file"
                style={{ display: 'none' }}
                onChange={handleChange}
                ref={hiddenFileInput}
                multiple
              />
            </div>
            <p className={styles.form__note}>Максимум 10мб</p>
            <textarea
              className={cx(
                'form__textarea',
                isSubmit && !form.description_request.length
                  ? 'form__textarea__novalid'
                  : ''
              )}
              value={form.description_request}
              name="description_request"
              onChange={handleTextfield}
            />
          </div>
        </div>
        <button
          type="submit"
          className={cx('form__btn', isSend ? 'form__btn__success' : '')}
          disabled={isSend}
        >
          {isSend ? 'Заявка отправлена' : 'Отправить заявку'}
        </button>
      </form>
    </section>
  );
}

export default memo(Form);
