setTimeout(() => {
  const flashMessages = document.querySelectorAll(".flash-msg");

  flashMessages.forEach((msg) => {
    const alert = bootstrap.Alert.getOrCreateInstance(msg);
    alert.close();
  });
}, 3000); // closes after 3 seconds