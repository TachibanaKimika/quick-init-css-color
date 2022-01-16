import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
export default function(message, time=300000) {
  let el = document.querySelector('#message-wrapper')
  const remove = (el) => {
    el.remove()
  }
  if (!el) {
    el = document.createElement('div')
    el.className = 'message-wrapper'
    el.id = 'message-wrapper'
    document.body.append(el)
    setTimeout(() => remove(el), time)
  }
  ReactDOM.render(
    <div className="c-message-main">
      {message}
    </div>,
    el
  )
}