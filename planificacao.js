const calendar = document.querySelector('#aulas-planeadas');

for (const lesson of lessons) {
  const row = calendar.insertRow();
  const link = document.createElement('a');
  link.href = './uc00596.html?aula=' + lesson.n + '#aulas';
  link.textContent = 'Aula ' + Number(lesson.n);
  row.insertCell().append(link);
  row.insertCell().textContent = lesson.d;
  row.insertCell().textContent = lesson.t;
  row.insertCell().textContent = lesson.p;
}
