export const getIncomingCallDialog = (callTypeInfo, acceptCallHandler, rejectCallHandler) => {
    const dialog = document.createElement('div');
    dialog.classList.add('dialog_wrapper');
    
    const dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog_content');
    dialog.appendChild(dialogContent);

    const title = document.createElement('p');
    title.classList.add('dialog_title');
    title.innerHTML = `Incoming ${callTypeInfo} Call`;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('dialog_image_container');
    const img = document.createElement('img');
    const avatarImagePath = './utils/images/dialogAvatar.png';
    img.src = avatarImagePath;
    imageContainer.appendChild(img);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('dialog_button_container');

    // accept btn
    const acceptCallButton = document.createElement('button');
    acceptCallButton.classList.add('dialog_accept_call_button');
    const acceptCallImg = document.createElement('img');
    acceptCallImg.classList.add('dialog_button_image');
    const acceptCallImagePath = './utils/images/acceptCall.png';
    acceptCallImg.src = acceptCallImagePath;
    acceptCallButton.append(acceptCallImg);
    buttonContainer.appendChild(acceptCallButton)

    // rej btn
    const rejectCallButton = document.createElement('button');
    rejectCallButton.classList.add('dialog_reject_call_button');
    const rejectCallImg = document.createElement('img');
    rejectCallImg.classList.add('dialog_button_image');
    const rejectCallImagePath = './utils/images/rejectCall.png';
    rejectCallImg.src = rejectCallImagePath;
    rejectCallButton.append(rejectCallImg);
    buttonContainer.appendChild(rejectCallButton)


    dialogContent.appendChild(title);
    dialogContent.appendChild(imageContainer);
    dialogContent.appendChild(buttonContainer);

    const dialogHtml = document.querySelector('#dialog');
    dialogHtml.appendChild(dialog);
};