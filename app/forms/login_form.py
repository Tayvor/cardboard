from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import db, User


def verify_email(form, field):
  email = field.data
  query = db.select(User).filter_by(email==email)
  user = db.session.execute(query)

  if not user:
    raise ValidationError('Email provided not found.')


def verify_password(form, field):
  password = field.data
  email = form.data['email']
  query = db.select(User).filter_by(email==email)
  user = db.session.execute(query)

  if not user:
    raise ValidationError('No such user exists.')
  if not user.check_password(password):
    raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
  email = StringField('email', validators=[DataRequired(), verify_email])
  password = StringField('password', validators=[DataRequired(), verify_password])
