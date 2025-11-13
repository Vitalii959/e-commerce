export const ShippingForm = () => {
  return (
    <div>
      <div className='shipping-form__title-container'>
        <div className='shipping-form__title'>Spipping Address</div>
      </div>
      <div className='shipping-form__container'>
        <form className='shipping-form__form'>
          <div className='shipping-form__name'>
            <label htmlFor=''>Full Name</label>
            <input className='input' type='text' placeholder='John Doe' />
          </div>

          <div className='shipping-form__address-container'>
            <div className='shipping-form__address-street'>
              <label htmlFor=''>Street Address</label>
              <input
                className='input'
                id='street'
                type='text'
                placeholder='123 Main Street'
              />
            </div>
            <div className='shipping-form__address-appartment'>
              <label htmlFor=''>
                Apartmentm suite, etc. <span>(optional)</span>
              </label>
              <input
                className='input'
                id='appartment'
                type='text'
                placeholder='Apt 123'
              />
            </div>
            <div className='shipping-form__address-city'>
              <label htmlFor=''>City</label>
              <input
                className='input'
                id='city'
                type='text'
                placeholder='New York'
              />
            </div>
            <div className='shipping-form__address-country'>
              <label htmlFor=''>Country</label>
              <input
                className='input'
                id='country'
                type='text'
                placeholder='country'
              />
            </div>
            <div className='shipping-form__address-state'>
              <label htmlFor=''>State</label>
              <input
                className='input'
                id='state'
                type='text'
                placeholder='state'
              />
            </div>
            <div className='shipping-form__address-zip'>
              <label htmlFor=''>Zip Code</label>
              <input className='input' id='zip' type='text' placeholder='zip' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
