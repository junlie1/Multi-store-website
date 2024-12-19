import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {
      fullName: '',
      email: '',
      city: '',
      locality: '',
      phoneNumber: '',
      id: '',
      token: '',
    };

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log('Payload received in updateUser:', action.payload);
      const {fullName ='',email = '',city = '',locality = '',phoneNumber = '',_id = '',token = ''} = action.payload      
      state.fullName = fullName;
      state.email = email;
      state.city = city;
      state.locality = locality;
      state.phoneNumber = phoneNumber;
      state.id = _id;
      state.token = token;

      localStorage.setItem('user', JSON.stringify(state));
    },
    getUser: (state, action) => {
      const { fullName, email, city, locality, phoneNumber, _id, token } = action.payload;

      state.fullName = fullName || '';
      state.email = email || '';
      state.city = city || '';
      state.locality = locality || '';
      state.phoneNumber = phoneNumber || '';
      state.id = _id || '';
      state.token = token || '';

      // Lưu vào localStorage để giữ thông tin sau khi refresh
      localStorage.setItem('user', JSON.stringify(state));
    },
    resetUser: (state) => {
        state.fullName = '';
        state.email = '';
        state.city = '';
        state.locality = '';
        state.phoneNumber = '';
        state.id = '';
        state.token = '';

    localStorage.setItem('user', JSON.stringify(state));

    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, getUser ,resetUser } = userSlide.actions

export default userSlide.reducer