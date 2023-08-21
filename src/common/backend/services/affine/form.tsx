import { FormattedMessage } from 'react-intl';
import React from 'react';

export default () => (
  <div style={{ textAlign: 'right' }}>
    <FormattedMessage
      id="backend.services.affine.form.confirm"
      defaultMessage="Please confirm that the AFFiNE client is installed."
    />
  </div>
);
