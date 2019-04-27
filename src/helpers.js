import React from 'react';

/**
 * @param {object} response 
 */
export const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (response.ok) {
        return json
      } else {
        return Promise.reject(json)
      }
    })
}

/**
 * @param {number} changePercent
 */
export const renderChangePercent = (changePercent) => {
  if (changePercent > 0) {
    return <span className="percent-raised">{changePercent}% &uarr;</span>
  } else if (changePercent < 0) {
    return <span className="percent-fallen">{changePercent}% &darr;</span>
  } else {
    return <span>{changePercent}</span>
  }
}
