import React, { FunctionComponent } from "react"
import css from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
  onClick: ()  => void
}

const LoadMoreBtn: FunctionComponent<LoadMoreBtnProps> = ({ onClick }) => {
  return (
      <div>
          <button className={css.button} onClick={onClick}>
            Load more
          </button>
    </div>
  )
}

export default LoadMoreBtn