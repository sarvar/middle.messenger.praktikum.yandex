import { Block, type BlockProps } from '../../core';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import Input from '../input/Input';
import { handleFormSubmit } from '../../utils/form';
import template from './profile-form.hbs?raw';

interface ProfileFormProps extends BlockProps {
  fields: Input[];
  withAvatarInput?: boolean;
}

export default class ProfileForm extends Block<ProfileFormProps> {
  constructor(props: ProfileFormProps) {
    super({
      ...props,
      avatar: new Avatar({ size: 'large' }),
      button: new Button({ label: 'Сохранить', type: 'submit' }),
      events: {
        submit: (event: Event) => handleFormSubmit(event, props.fields),
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
