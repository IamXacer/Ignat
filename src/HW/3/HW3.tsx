import {ChangeEvent, useState} from 'react';
import React from "react";
import styles from './hw3.module.css'

export const HW3 = () => {
  // 1️⃣ Раскомментируйте JSX(HW3.tsx) и вы увидите,
  // что приложение начнет гореть красным и ругаться 😡
  // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
  // - прописать типизацию, где необходимо
  // - починить все, что горит красным
  // - дописать функциональность (где указано комментариями)
  // - приложение должно компилироваться и запускаться в браузере


  const [currentText, setCurrentText] = useState('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

 const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
   let curenEvent = e.currentTarget.value
     setCurrentText(curenEvent)
 }

    const handleSave = () => {
        if (currentText.trim() !== '') {
            setTexts([...texts, currentText]);
            setCurrentText(''); // Сбросить currentText на пустую строку после сохранения
        }
    };

  return (
    <div id={'hw03'}>
      {currentText ? (
        <h1 id={'hw03-text'}>{currentText}</h1>
      ) : (
        <h1 className={styles.hw03DefaultText} id={'hw03-default-text'}>Здесь появится новое дело</h1> // ничего не меняем, здесь все норм
      )}

      <input value={currentText} onChange={handleChange}/>

      <button className={styles.hw03Button}
          id={'hw03-button'} onClick={handleSave}> // НЕ ХВАТАТЕТ ФУНКЦИИ
        Сохранить
      </button>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => {
          return (
            <li key={index} id={`hw03-task-${index}`}>
              {el}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
