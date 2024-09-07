from .db import db, environment, SCHEMA


class Card(db.Model):
  __tablename__ = 'cards'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
