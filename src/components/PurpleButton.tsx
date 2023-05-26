import React from 'react';

const PurpleButton = (props: { data: string }) => {
  return (
    <button className='rounded-3xl bg-primary px-8 py-2 text-text_button'>
      {props.data}
    </button>
  );
};

export default PurpleButton;
