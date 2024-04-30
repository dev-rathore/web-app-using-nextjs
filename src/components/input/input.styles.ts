const styles = {
  variant: {
    primary: {
      inputContainer: `
        w-full
        rounded-lg
        border
        border-primary
        bg-white
        py-2
        px-4
        outline-none
        focus-visible:shadow-none
      `,
      input: `
        flex-1
        w-full
        outline-none
        [appearance:textfield]
        [&::-webkit-inner-spin-button]:appearance-none
      `,
    },
  },
  border: {
    errorState: 'border-red-500',
    normalState: 'border-stroke',
  },
  hidden: 'hidden',
};

export default styles;
