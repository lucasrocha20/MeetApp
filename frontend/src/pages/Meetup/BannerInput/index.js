import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('file');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [controlRef, setControlRef] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (controlRef && ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [controlRef, ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    setControlRef(true);

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
    setControlRef(false);
  }

  return (
    <Container>
      <label htmlFor="file">
        {preview ? (
          <img src={preview} alt="banner" />
        ) : (
          <div>
            <MdCameraAlt size="55" />
            <strong>Selecionar Imagem</strong>
          </div>
        )}

        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
