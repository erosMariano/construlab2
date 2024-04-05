function formWhatsapp() {
  event.preventDefault()

  const nameForm = event.target.name__form.value

  const phoneForm = event.target.phone__form.value

  const emailForm = event.target.email__sobrenome.value

  const textareaForm = event.target.textarea__form.value


  let texto = `Olá meu nome é ${nameForm}\nMeu email é: ${emailForm}\n\n${textareaForm}`
  texto = window.encodeURIComponent(texto)

  window.open(`https://api.whatsapp.com/send?phone=5511959353574&text=${texto}`, "_blank");

}