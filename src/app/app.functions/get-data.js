exports.main = (context = {}, sendResponse) => {
  const { text } = context.parameters;

  const response = `This is a msg coming from a serverless function! You entered: ${text}`;

  try {
    sendResponse(response);
  } catch (error) {
    sendResponse(error);
  }
};
