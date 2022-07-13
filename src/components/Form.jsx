import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCart,
  orderStatusSucces,
  orderStatusError,
  removeOrderStatus,
} from '../redux/slice/CartSlice';

const Form = () => {
  const { totalPrice, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const order = cartItems.map((item) => {
    return {
      name: item.name,
      price: item.price,
      count: item.count,
    };
  });

  const RegistryForm = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      adress: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Минимальное количевство символов 2')
        .required('Обьязательное поле'),
      phone: Yup.number()
        .min(2, 'Минимальное количевство символов 2')
        .required('Обьязательное поле'),
      email: Yup.string(),
      adress: Yup.string().required('Обьязательное поле'),
    }),

    onSubmit: (values) => {
      try {
        axios
          .post('https://secret-thicket-78317.herokuapp.com/order', {
            values,
            order,
          })
          .then(() => {
            dispatch(orderStatusSucces());
          })
          .catch(() => {
            dispatch(orderStatusError());
          })
          .finally(() => {
            dispatch(clearCart());
            setTimeout(() => {
              dispatch(removeOrderStatus());
            }, 3000);
          });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form className="orderRegistry" onSubmit={RegistryForm.handleSubmit}>
      <div className="form-item">
        <label htmlFor="name">Ваше имя</label>
        <input
          id="name"
          name="name"
          type="text"
          value={RegistryForm.values.name}
          onChange={RegistryForm.handleChange}
          onBlur={RegistryForm.handleBlur}
        />
      </div>
      <div className="form-error">
        {RegistryForm.errors.name && RegistryForm.touched.name ? (
          <div className="error">{RegistryForm.errors.name}</div>
        ) : null}
      </div>
      <div className="form-item">
        <label htmlFor="phone">Ваш номер телефона</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          value={RegistryForm.values.phone}
          onChange={RegistryForm.handleChange}
          onBlur={RegistryForm.handleBlur}
        />
      </div>
      <div className="form-error">
        {RegistryForm.errors.phone && RegistryForm.touched.phone ? (
          <div className="error">{RegistryForm.errors.phone}</div>
        ) : null}
      </div>

      <div className="form-item">
        <label htmlFor="city">Ваш email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={RegistryForm.values.city}
          onChange={RegistryForm.handleChange}
          onBlur={RegistryForm.handleBlur}
        />
      </div>
      <div className="form-error">
        {RegistryForm.errors.email && RegistryForm.touched.email ? (
          <div className="error">{RegistryForm.errors.email}</div>
        ) : null}
      </div>
      <div className="form-item">
        <label htmlFor="adress">Адрес</label>
        <input
          id="adress"
          name="adress"
          type="adress"
          value={RegistryForm.values.adress}
          onChange={RegistryForm.handleChange}
          onBlur={RegistryForm.handleBlur}
        />
      </div>
      <div className="form-error">
        {RegistryForm.errors.adress && RegistryForm.touched.adress ? (
          <p className="error">{RegistryForm.errors.adress}</p>
        ) : null}
      </div>

      <button type="submit" className="button ">
        Отправить | {totalPrice} $
      </button>
    </form>
  );
};

export default Form;
