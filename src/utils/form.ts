import Input from '../components/input/Input';

const PASSWORD_MISMATCH = 'Пароли не совпадают';

function passwordsMatch(fields: Input[]): boolean {
  const password = fields.find((field) => field.name === 'password');
  const repeat = fields.find((field) => field.name === 'password_repeat');

  if (!password || !repeat) {
    return true;
  }

  if (password.value === repeat.value) {
    return true;
  }

  repeat.showError(PASSWORD_MISMATCH);

  return false;
}

function collectFormData(fields: Input[]): Record<string, string> | null {
  const isValid = fields.map((field) => field.validateSelf()).every(Boolean);

  if (!isValid || !passwordsMatch(fields)) {
    return null;
  }

  return fields.reduce<Record<string, string>>((acc, field) => {
    acc[field.name] = field.value;

    return acc;
  }, {});
}

export function handleFormSubmit(event: Event, fields: Input[]): void {
  event.preventDefault();

  const data = collectFormData(fields);

  if (data) {
    console.log(data);
  }
}
