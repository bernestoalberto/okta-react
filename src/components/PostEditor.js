import React from 'react';
import {Button, Card, CardActions, CardContent, Modal, TextField, withStyles,} from '@material-ui/core';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import {Field, Form} from 'react-final-form';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '90%',
    maxWidth: 500,
  },
  modalCardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  },
});

const PostEditor = ({classes, post, onSave, history}) => (
  <Form initialValues={post} onSubmit={onSave}>
    {({handleSubmit}) => (
      <Modal
        className={classes.modal}
        onClose={() => history.goBack()}
        open
      >
        <Card className={classes.modalCard}>
          <form onSubmit={handleSubmit}>
            <CardContent className={classes.modalCardContent}>
              <Field name="title">
                {({input}) => <TextField label="Title" autoFocus {...input} />}
              </Field>
              <Field name="body">
                {({input}) => (
                  <TextField
                    className={classes.marginTop}
                    label="Body"
                    multiline
                    rows={4}
                    {...input}
                  />
                )}
              </Field>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" type="submit">Save</Button>
              <Button size="small" onClick={() => history.goBack()}>Cancel</Button>
            </CardActions>
          </form>
        </Card>
      </Modal>
    )}
  </Form>
);

export default compose(
  withRouter,
  withStyles(styles),
)(PostEditor);
