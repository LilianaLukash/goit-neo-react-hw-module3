import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export default function ContactForm ({ onAddContact }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Обов’язкове поле'),
    number: Yup.string()
      .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'Формат: 123-45-67')
      .required('Обов’язкове поле'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({
      id: nanoid(),
      ...values,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field name="name" />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number">Number</label>
        <Field name="number" />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};


