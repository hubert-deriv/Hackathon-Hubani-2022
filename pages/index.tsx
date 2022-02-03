import { useFormik } from 'formik';
import QRCode from 'qrcode.react'

const Home = () => {
  const vCardForm = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      mobile: '',
      phone: '',
      fax: '',
      email: '',
      company: '',
      your_job: '',
      street: '',
      city: '',
      zip: '',
      state: '',
      country: '',
      website: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return ( 
    <div className='wrapper'>
      <QRCode value="http://facebook.github.io/react/" />
      <div className='form-content'>
        <h1>Hubani VCard Generator</h1>
        <form className='vcard-form' onSubmit={vCardForm.handleSubmit}>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="first_name"
                name="first_name"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.first_name}
              />
              <label>First name</label>
            </div>
            <div className='custom-input'>
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.last_name}
              />
              <label>Last name</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.mobile}
              />
              <label>Mobile</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.phone}
              />
              <label>Phone</label>
            </div>
            <div className='custom-input'>
              <input
                id="fax"
                name="fax"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.fax}
              />
              <label>Fax</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.email}
              />
              <label>Email</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="company"
                name="company"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.company}
              />
              <label>Company</label>
            </div>
            <div className='custom-input'>
              <input
                id="your_job"
                name="your_job"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.your_job}
              />
              <label>Your job</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="street"
                name="street"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.email}
              />
              <label>Street</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="city"
                name="city"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.city}
              />
              <label>City</label>
            </div>
            <div className='custom-input'>
              <input
                id="zip"
                name="zip"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.zip}
              />
              <label>Zip code</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="state"
                name="state"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.state}
              />
              <label>State</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="country"
                name="country"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.country}
              />
              <label>Country</label>
            </div>
          </div>
          <div className='inputs-container'>
            <div className='custom-input'>
              <input
                id="website"
                name="website"
                type="text"
                placeholder=" "
                onChange={vCardForm.handleChange}
                value={vCardForm.values.website}
              />
              <label>Website</label>
            </div>
          </div>
          <button type="submit">Generate QR</button>
        </form>
      </div>
    </div>
  );
}

export default Home
