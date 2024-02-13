import '../css/style.scss'

const elementBtn = document.querySelector('.input-form-btn') as HTMLButtonElement;
const elementInsert = document.querySelector('.input-form-insert') as HTMLInputElement;
const elementResult = document.querySelector('.input-form-result') as HTMLDivElement;

let simpleId = 0;

elementBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  if (validation()) {
    insertInputValue(elementInsert.value, simpleId); 
  }
});

elementInsert.addEventListener('input', (e) => {
  e.preventDefault();
  const {target} = e;
  if ((target as HTMLTextAreaElement).value !== '') {
    elementInsert.classList.remove('input-form-valid');
  }
});

function handleDeleteBtn(): void {
  const elementForms = document.querySelectorAll('.input-form-delete');
  elementForms.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement!.remove();
    });
  });
}

function validation(): boolean {
  if (elementInsert.value === '') {
    elementInsert.classList.add('input-form-valid');
    return false;
  }
  elementInsert.classList.remove('input-form-valid');
  return true;
}

function insertInputValue(value: string, id: number): void {
  elementResult.insertAdjacentHTML('beforeend', `
    <div class="input-form-info">
      <div class="input-form-text">${value}</div>
      <div class="input-form-delete" data-id="${id}">
      </div>
    </div>
  `);
  simpleId++;
  handleDeleteBtn();
}