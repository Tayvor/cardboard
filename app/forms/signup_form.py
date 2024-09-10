from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import db, User


def is_unique_email(form, field):
  email = field.data
  query = db.select(User).filter_by(email=email)
  user = db.session.execute(query)

  if user:
    raise ValidationError('Email address is already in use.')


def is_unique_username(form, field):
  username = field.data
  query = db.select(User).filter_by(username=username)
  user = db.session.execute(query)

  if user:
    raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
  email = StringField('email', validators=[DataRequired(), is_unique_email])
  username = StringField('username', validators=[DataRequired(), is_unique_username])
  password = StringField('password', validators=[DataRequired()])
