const TruncateText = (text: string, limit: number): string => {
  return text.length > limit ? text.substring(0, limit) : text;
};

export default TruncateText;
