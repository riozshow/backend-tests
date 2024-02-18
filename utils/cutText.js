module.exports = (content, maxLength) => {
  if (typeof maxLength !== 'number' || maxLength < 1) return 'Error';
  if (!content || !content.length || content.length < 1) return 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
