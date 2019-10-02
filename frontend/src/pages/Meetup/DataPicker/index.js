import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';
import { parseISO, setHours, setMinutes } from 'date-fns';
import { Container } from './styles';

registerLocale('br', ptBR);

export default function DatePicker({ name, placeholderText }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(
    defaultValue && parseISO(defaultValue)
  );
  const [selectedDay, setSelectedDay] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line
  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        dateFormat="dd/MM/yyyy HH:mm"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        placeholderText={placeholderText}
        onChange={date => {
          setSelected(date);
          setSelectedDay(date.getDay());
        }}
        minDate={new Date()}
        minTime={setHours(
          setMinutes(new Date(), 0),
          selectedDay === new Date().getDay() ? new Date().getHours() + 1 : 0
        )}
        maxTime={setHours(setMinutes(new Date(), 0), 23)}
        ref={ref}
      />
      {}
      {error && <span>{error}</span>}
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
};

DatePicker.defaultProps = {
  placeholderText: '',
};
