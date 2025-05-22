const getCssVariable = (name: string) => {
    const result = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return result;
  };
  
  export default getCssVariable;