import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export default function ContactForm ({ onAddContact }) {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    number: Yup.string()
      .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'Format: 123-45-67')
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
        <Field className={styles.input} name="name" />
        <ErrorMessage styleName={styles.error} name="name" component="div" className={styles.error} />

        <label htmlFor="number">Number</label>
        <Field className={styles.input} name="number" />
        <ErrorMessage styleName={styles.error} name="number" component="div" className={styles.error} />

        <button className={styles.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};


