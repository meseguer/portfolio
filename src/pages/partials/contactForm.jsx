import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';


export default class IndexPage extends React.Component {
  sendEmail(values, setSubmitting) {
    axios.post('https://meseguer.io/.netlify/functions/hello', values)
      .then((res) => {
        setSubmitting(false);
      });
  }

  render() {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => this.sendEmail(values, setSubmitting)}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Name */}
            <div className="form-group">
              <Field className="form-control" type="text" name="name" placeholder="Name" />
            </div>
            {/* Email */}
            <div className="form-group">
              <Field className="form-control" type="email" name="email" placeholder="Email" />
            </div>
            {/* Message */}
            <div className="form-group">
              <Field className="form-control" component="textarea" name="message" placeholder="Message" />
            </div>
            {/* Submit */}
            <button type="submit" disabled={isSubmitting} className="devshop-button" style={{ borderRadius: 0, width: '100%' }}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
