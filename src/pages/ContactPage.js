import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactPage = ({styles}) => {
    return (
        <div container mx-auto px-5>
            <center>
                <h1>Register a new account</h1>
                <>
                    <Formik
                        initialValues={{ fullname: "", email: "" }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.fullname) {
                                errors.fullname = "Required";
                            }

                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Invalid email address";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              alert(JSON.stringify(values, null, 2));
                              setSubmitting(false);
                            }, 400);
                        }}                    
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <label className={styles.label} htmlFor='Name'>
                                    Full Name
                                </label>
                                <Field 
                                    className={styles.field} 
                                    type='text' 
                                    id='name' 
                                    name='fullname' 
                                    placeholder='Enter your full name'
                                />
                                <ErrorMessage name="fullname" component="div" />

                                <label className={styles.label} htmlFor='Name'>
                                    Email Address
                                </label>
                                <Field
                                    className={styles.field}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email address"
                                />
                                <ErrorMessage name="email" component="div" />

                                <button 
                                    type="submit" 
                                    className={styles.button} 
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </>
            </center>            
        </div>
    );
}

export default ContactPage;