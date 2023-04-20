import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactPage = ({styles}) => {
    return (
        <div className="container mx-auto grid grid-cols-2 my-32">
            <div className="container mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Drop me a line</h1>
                <h5 className="mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">I'd love to hear from you.</h5>
            </div>
            <div className="container mx-auto max-w-screen-sm">
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

                            <label className={styles.label} htmlFor='Message'>
                                Message
                            </label>
                            <Field 
                                className={styles.field} 
                                type='textarea' 
                                id='message' 
                                name='message' 
                                placeholder='Enter your message'
                            />
                            <ErrorMessage name="message" component="div" />

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
            </div>
        </div>
    );
}

export default ContactPage;