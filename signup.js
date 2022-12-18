const pwFields = () => {
  return document.querySelectorAll('input[type="password"]');
}

const addPWConfirmListeners = () => {
  pwFields().forEach(field => field.addEventListener('input', confirmPWsMatch));
}

const pwsAreIdentical = () => {
  const pw = document.getElementById('password');
  const pwConfirm = document.getElementById('confirm-password');
  return pw.value === pwConfirm.value;
}

const pwsAreShowingPlaceholders = () => {
  return (document.querySelector('#password:placeholder-shown') ||
    document.querySelector('#confirm-password:placeholder-shown'));
}

const confirmPWsMatch = () => {
  if (pwsAreShowingPlaceholders() || pwsAreIdentical()) {
    pwFields().forEach(field => {
      field.setCustomValidity('');
    });
    document.querySelectorAll('.pw-error').forEach(span => {
      span.style.display = 'none';
    });
  } else {
    pwFields().forEach(field => {
      field.setCustomValidity('Passwords must match')
    });
    const errorMsg = "Passwords must match";
    document.querySelectorAll('.pw-error').forEach(span => {
      span.innerHTML = errorMsg;
      span.style.display = 'block';
    });
  }
}

addPWConfirmListeners();