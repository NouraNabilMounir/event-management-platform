import * as Yup from 'yup';

export const eventValidationSchema = Yup.object({
  name: Yup.string().required('Event name is required'),
  date: Yup.date().required('Date is required').nullable(),
  location: Yup.string().required('Location is required'),
  description: Yup.string().required('Description is required')
});
