import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Global } from '@emotion/react'

import HomePage from '../../pages/home/HomePage'
import LoginPage from '../../pages/login/LoginPage'
import MyPage from '../../pages/my-page/MyPage'
import SignUpPage from '../../pages/sign-up/SignUpPage'

import globalStyle from '../../styles/GlobalStyle'

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
