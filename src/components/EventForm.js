import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Event name is required'),
  date: Yup.date().required('Date is required').nullable(),
  location: Yup.string().required('Location is required'),
  description: Yup.string().required('Description is required')
});

const EventForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Event Name</label>
            <Field name="name" type="text" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1"/>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <Field name="date" type="date" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            <ErrorMessage name="date" component="div" className="text-red-600 text-sm mt-1"/>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <Field name="location" type="text" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            <ErrorMessage name="location" component="div" className="text-red-600 text-sm mt-1"/>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <Field name="description" as="textarea" className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1"/>
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default EventForm;