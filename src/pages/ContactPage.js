import { Formik, Form, Field, ErrorMessage } from 'formik';
import validateContactForm from '../utils/validateContactForm';

const handleSubmit = (values) => {
    const comment = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        text: values.commentText,
        date: new Date(Date.now()).toISOString()
    };
    alert(JSON.stringify(values, null, 2));
    console.log("comment: ", comment);
    // fetchContactForm(comment);
};

const styles = {
    label: 'block text-gray-700 text-sm font-bold mt-5 pt-2 pb-1',
    field:
      'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
    button:
      ' bg-gray-700 text-white font-bold mt-10 py-2 px-4 w-full rounded hover:bg-gray-600',
    errorMsg: 'text-red-500 text-sm',
  }

const ContactPage = () => {
    return (
        <div id="contact_page">
            <div className="container mx-auto grid grid-cols-2 my-32">
                <div className="container mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Drop me a line</h1>
                    <h5 className="mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">I'd love to hear from you.</h5>
                </div>
                <div className="container mx-auto max-w-screen-sm">
                    <Formik 
                        initialValues={
                            {
                                firstName: '',
                                lastName: '',
                                email: '',
                                commentText: ''
                            }
                        }
                        onSubmit={handleSubmit}
                        validate={validateContactForm}
                        >
                        <Form>
                            <label htmlFor='firstName' className={styles.label} >First Name</label>
                            <Field
                                name='firstName'
                                placeholder='First Name'
                                className={styles.field}
                            />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className={styles.errorMsg}>{msg}</p>} 
                            </ErrorMessage>
                            <label htmlFor='lastName' className={styles.label}>Last Name</label>
                            <Field
                                name='lastName'
                                placeholder='Last Name'
                                className={styles.field}
                            />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className={styles.errorMsg}>{msg}</p>} 
                            </ErrorMessage>          

                            <label htmlFor='email' className={styles.label}>Email</label>
                            <Field
                                name='email'
                                placeholder='Email'
                                className={styles.field}
                            />
                            <ErrorMessage name='email'>
                                {(msg) => <p className={styles.errorMsg}>{msg}</p>}
                            </ErrorMessage>

                            <label htmlFor='commentText' className={styles.label}>Comment</label>
                            <Field
                                name='commentText'
                                as='textarea'
                                rows='9'
                                className={styles.field}
                            />
                            <ErrorMessage name='commentText'>
                                {(msg) => <p className={styles.errorMsg}>{msg}</p>} 
                            </ErrorMessage>         

                            <button type='submit' className={styles.button}>
                                Submit
                            </button>

                            {/* <button type='submit' style={{backgroundColor:"#483d8b", color:"white", margin: "5%", boxShadow: "3px 3px 1px rgba(46, 46, 46, 0.62)"}}>
                                Submit
                            </button> */}
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;