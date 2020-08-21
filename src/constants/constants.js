function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getText = (text) => text.replace(/_|-/g, ' ');


export const getOptions = (data, valueProp, textProp) => {
  return [
    {
      value: '',
      text: ''
    },
    ...data.map(d => {
      const value = d[valueProp];
      const text = capitalizeFirstLetter(getText(d[textProp] ? d[textProp] : d[valueProp]));
      return {
        value,
        text
      };
    })
  ];
};
