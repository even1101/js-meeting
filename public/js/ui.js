export const updatePersonalCode = (personalCode) => {
    const personalCodeParagraph = document.querySelector('#personal_code_paragraph');
    personalCodeParagraph.innerHTML = personalCode;
};