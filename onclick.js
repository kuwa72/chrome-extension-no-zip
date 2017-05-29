var names = document.getElementsByName("subjectbox");
names.forEach(function(x) {
  if (!x.value.match(/\[no\-zip\]$/)) {
    x.value = x.value + "[no-zip]";
  }
});
