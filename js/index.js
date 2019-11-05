let inputs, textArea;
let count = 0;
let completed = 0;
const element = [];

inputs = document.getElementsByTagName('input');
textArea = document.getElementsByTagName('textarea');

count = count + inputs.length + textArea.length;

for (let i = 0; i < inputs.length; i++) {
  const content = { id: inputs.item(i).id, completed: false };
  element.push(content);

  const entry = document.getElementById(inputs.item(i).id);

  entry.addEventListener('change', function() {
    callMe(entry, inputs.item(i).id);
  });
}

for (let i = 0; i < textArea.length; i++) {
  const content = { id: textArea.item(i).id, completed: false };
  element.push(content);

  const entry = document.getElementById(textArea.item(i).id);

  entry.addEventListener('change', function() {
    callMe(entry, textArea.item(i).id);
  });
}

function callMe(entry, id) {
  const index = element.findIndex(function(record) {
    return record.id === id;
  });

  if (entry.value.length <= 0) {
    if (element[index].completed !== false) {
      element[index].completed = false;
      completed = completed - (1 / count) * 100;
    }
  } else {
    if (element[index].completed !== true) {
      element[index].completed = true;
      completed = completed + (1 / count) * 100;
    }
  }

  document.getElementById('progressBar').value = completed;
  document.getElementById('progressBar').innerHTML = completed + '%';
}
