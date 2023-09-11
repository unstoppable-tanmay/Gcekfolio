import React from 'react';

const PurpleButton = (props: { data: string; className: String }) => {
  return (
    <button
      className={
        'rounded-3xl border-2 border-white bg-primary px-8 py-2 text-text_button shadow-lg duration-200 hover:shadow-xl active:scale-95 ' +
        props.className
      }
    >
      {props.data}
    </button>
  );
};

export default PurpleButton;
