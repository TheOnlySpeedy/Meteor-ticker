AccountsTemplates.configure({
  confirmPassword: false
});

AccountsTemplates.addFields([
  {
    _id: "firstName",
    type: "text",
    displayName: "First Name",
    required: true,
    re: /(?=.*[a-z])(?=.*[A-Z])/,
    errStr: '1 uppercase and 1 lowercae letter required'
  },
  {
    _id: "lastName",
    type: "text",
    displayName: "Last Name",
    required: true,
    re: /(?=.*[a-z])(?=.*[A-Z])/,
    errStr: '1 uppercase and 1 lowercae letter required'
  }
]);
