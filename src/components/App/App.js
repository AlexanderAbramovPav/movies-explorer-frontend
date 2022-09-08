import React, { useState, useEffect } from 'react';
import { CurrentUserContext} from '../../context/CurrentUserContext';
import { Route, Routes, Navigate, Link, useNavigate} from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error404 from '../Error404/Error404';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import EditAccountInfoForm from '../EditAccountInfoForm/EditAccountInfoForm';
import PopupInfo from '../PopupInfo/PopupInfo';
import errorIcon from '../../images/icon-error.svg';
import okIcon from '../../images/icon-ok.svg';


import './App.css';

function App() {

  // Временные переменный для тестирования попапов
  const [currentUser, setCurrentUser] = useState({
    isLogin: true, 
  });

  const [selectedTooltip, setSelectedTooltip] = useState({
    icon: okIcon, 
    tipTitle: "Вы успешно зарегистрировались!"
  });

  const routes = {
    profile: '/profile', 
    movies: '/movies', 
    savedMovies: '/saved-movies'}

  return (
      // Контекст пока не защищенный
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main onLogin={'/signin'} onRegister={'/signup'}/>} />
        <Route path="/signup" element={<Register onSignChange={'/signin'}/>} />
        <Route path="/signin" element={<Login onSignChange={'/signup'}/>} />
        <Route path="/profile" element={<Profile routeLinks={routes} />}/>
        <Route path="/movies" element={<Movies routeLinks={routes}/> }/> 
        <Route path="/saved-movies" element={<SavedMovies routeLinks={routes}/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* Для проверки попапов в isOpen ставим true\false */}
      <PopupInfo onClose={""} isOpen={false} selectedTooltip={selectedTooltip} onOutClick={""}/>
      <EditAccountInfoForm isOpen={false} onClose={''} onUpdateUser={''} onOutClick={''} name="edit-profile" title="Редактировать профиль" submit="Сохранить"/>
    </CurrentUserContext.Provider>  
  );
}

export default App;
