export default function verifyData(data) {
  const { reply_to, message, from_name } = data;
  //https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635 */
  const emailRegex = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;
  return (
    emailRegex.test(reply_to) &&
    message.length >= 1 &&
    message.length <= 500 &&
    from_name
  );
}
