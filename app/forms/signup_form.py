from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import db, User


def is_unique_email(form, field):
  email = field.data
  query = db.select(User).filter_by(User.email==email)
  user = db.session.execute(query)
  if user:
    raise ValidationError('Email address is already in use.')


def is_unique_username(form, field):
  username = field.data
  query = db.select(User).filter_by(User.username==username)
  user = db.session.execute(query)
  if user:
    raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
  username = StringField('username', validators=[DataRequired(), is_unique_username])
  email = StringField('email', validators=[DataRequired(), is_unique_email])
  password = StringField('password', validators=[DataRequired()])
