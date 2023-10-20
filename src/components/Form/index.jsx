import React, { useState } from 'react';
import validations from './validations';
import style from './index.module.css'

const MyForm = ({login}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      validations(updatedData, errors, setErrors);
      return updatedData;
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className={style.containerForm}>
      <h1 className={style.h2}>Login</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={style.input1}
        />
        <p>{errors.email}</p>
        <label className={style.label}>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={style.input2}
        />
        <p>{errors.password}</p>
        <button type="submit" className={style.btn}>Submit</button>
      </form>
      <div className={style.opacidad}></div>
    </div>
  );
};

export default MyForm;
