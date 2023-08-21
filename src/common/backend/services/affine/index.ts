import Service from './service';
import Form from './form';

export default () => {
  return {
    name: 'AFFiNE',
    icon: 'affine',
    type: 'affine',
    service: Service,
    form: Form,
    homePage: 'https://obsidian.md/',
  };
};
